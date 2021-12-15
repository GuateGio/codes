<?php

namespace Kanboard\Model;

use Kanboard\Core\Security\Token;

/**
 * Config model
 *
 * @package  Kanboard\Model
 * @author   Frederic Guillot
 */
class ConfigModel extends SettingModel
{
    /**
     * Path prefix
     *
     * @var string
     */
    const PATH_PREFIX = 'settings';

    /**
     * Get a config variable with in-memory caching
     *
     * @access public
     * @param  string   $name            Parameter name
     * @param  string   $default_value   Default value of the parameter
     * @return string
     */
    public function get($name, $default_value = '')
    {
        $options = $this->memoryCache->proxy($this, 'getAll');
        return isset($options[$name]) && $options[$name] !== '' ? $options[$name] : $default_value;
    }

    /**
     * Optimize the Sqlite database
     *
     * @access public
     * @return boolean
     */
    public function optimizeDatabase()
    {
        return $this->db->getConnection()->exec('VACUUM');
    }

    /**
     * Compress the Sqlite database
     *
     * @access public
     * @return string
     */
    public function downloadDatabase()
    {
        return gzencode(file_get_contents(DB_FILENAME));
    }

    /**
     * Replace database file with uploaded one
     *
     * @access public
     * @param  string $file
     * @return bool
     */
    public function uploadDatabase($file)
    {
        $this->db->closeConnection();
        return file_put_contents(DB_FILENAME, gzdecode(file_get_contents($file))) !== false;
    }

    /**
     * Get the Sqlite database size in bytes
     *
     * @access public
     * @return integer
     */
    public function getDatabaseSize()
    {
        return DB_DRIVER === 'sqlite' ? filesize(DB_FILENAME) : 0;
    }

    /**
     * Regenerate a token
     *
     * @access public
     * @param  string   $option   Parameter name
     * @return boolean
     */
    public function regenerateToken($option)
    {
        return $this->save(array($option => Token::getToken()));
    }

    /**
     * Prepare data before save
     *
     * @access public
     * @param  array $values
     * @return array
     */
    public function prepare(array $values)
    {
        if (! empty($values['application_url']) && substr($values['application_url'], -1) !== '/') {
            $values['application_url'] = $values['application_url'].'/';
        }

        return $values;
    }

    /**
     * Check if a filename is an image
     *
     * @access public
     * @param  string   $filename   Filename
     * @return bool
     */
    public function isImage($filename)
    {
        switch (get_file_extension($filename)) {
            case 'jpeg':
            case 'jpg':
            case 'png':
            case 'gif':
                return true;
        }

        return false;
    }

    /**
     * Upload file
     *
     * @access public
     * @param  string $option
     * @param  array   $file
     * @return boolean
     */
    public function uploadFile($option, array $file)
    {
        try {
            if ($file['error'] == UPLOAD_ERR_OK && $file['size'] > 0) {
                $filename = $this->configModel->getOption($option);
                if (!empty($filename)) {
                    $this->objectStorage->remove($filename);
                }
                $destinationFilename = $this->generatePath($option, $file['name']);
                $this->objectStorage->moveUploadedFile($file['tmp_name'], $destinationFilename);
                $this->save(array($option => $destinationFilename));
            } else {
                throw new Exception('File not uploaded: '.var_export($file['error'], true));
            }
        } catch (Exception $e) {
            $this->logger->error($e->getMessage());
            return false;
        }

        return true;
    }

    /**
     * Generate the path for a new filename
     *
     * @access public
     * @param  string   $option
     * @param  string    $filename
     * @return string
     */
    public function generatePath($option, $filename)
    {
        return implode(DIRECTORY_SEPARATOR, array(self::PATH_PREFIX, $option, hash('sha1', $filename.time())));
    }
}
