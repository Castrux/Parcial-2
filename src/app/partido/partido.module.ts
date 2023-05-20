import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './partidoList/partidoList.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartidoListComponent],
  exports: [PartidoListComponent]
})
export class PartidoModule { }
