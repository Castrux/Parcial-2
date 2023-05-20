import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipoList',
  templateUrl: './equipoList.component.html',
  styleUrls: ['./equipoList.component.css']
})
export class EquipoListComponent implements OnInit {

  equipos: Array<Equipo> = [];

  constructor(private equiposService: EquipoService) { }

  ngOnInit() {
    this.getEquipos();
  }

  getEquipos() {
    this.equiposService.getEquipos().subscribe(equipos => {
      this.equipos = equipos;

    })
  }

}
