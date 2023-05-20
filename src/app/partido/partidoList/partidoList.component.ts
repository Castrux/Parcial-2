import { Component, OnInit } from '@angular/core';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';

@Component({
  selector: 'app-partidoList',
  templateUrl: './partidoList.component.html',
  styleUrls: ['./partidoList.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos: Array<Partido> = [];

  constructor(private partidoService: PartidoService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos => {
       this.partidos = partidos;
    }))
  }
  ngOnInit() {
    this.getPartidos();
  }

}
