import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styles: [
  ]
})
export class GestionComponent implements OnInit {

  public ocultar = false;
  public gestiones = [];

  constructor() { }

  ngOnInit(): void {
    this.gestiones = [
      {
        nro_gestion: 25,
        nombre_completo: "Estuardo Ramirez",
        dpi: 2636917050102,
        row_class: ""
      },
      {
        nro_gestion: 26,
        nombre_completo: "Estuardo Ramirez",
        dpi: 2636917050102,
        row_class: "table-danger"
      },
      {
        nro_gestion: 28,
        nombre_completo: "Estuardo Ramirez",
        dpi: 2636917050102,
        row_class: "table-info"
      },
      {
        nro_gestion: 36,
        nombre_completo: "Estuardo Ramirez",
        dpi: 2636917050102,
        row_class: "table-info"
      },
      {
        nro_gestion: 37,
        nombre_completo: "Estuardo Ramirez",
        dpi: 2636917050102,
        row_class: ""
      },
      {
        nro_gestion: 63,
        nombre_completo: "Estuardo Ramirez",
        dpi: 2636917050102,
        row_class: "table-danger"
      },
      {
        nro_gestion: 90,
        nombre_completo: "Estuardo Ramirez",
        dpi: 2636917050102,
        row_class: ""
      }
    ];
  }

}
