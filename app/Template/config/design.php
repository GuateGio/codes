<div class="page-header">
    <h2><?= t('Application design') ?></h2>
</div>
<?php if (! empty($logoCurrent)): ?>
<?= $this->app->renderImageAvatar($logo) ?>
<div class="form-actions">
    <?= $this->url->link(t('Remove my image'), 'ConfigController', 'removeDesign', [], true, 'btn btn-red js-modal-replace') ?>
</div>
<?php endif ?>

<hr>
<form action="<?= $this->url->href('ConfigController', 'saveDesign', [], true) ?>" method="post" enctype="multipart/form-data">
    <?= $this->form->label(t('Logo file'), 'logo') ?>
    <?= $this->form->file('logo') ?>

    <?= $this->modal->submitButtons(array('submitLabel' => t('Upload'))) ?>
</form>
