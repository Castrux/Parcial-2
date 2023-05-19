import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './partidoList/partidoList.component';
import { PartidoComponent } from './partido.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartidoListComponent, PartidoComponent],
  exports: [PartidoListComponent]
})
export class PartidoModule { }
