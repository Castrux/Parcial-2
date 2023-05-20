import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoListComponent } from './equipoList/equipoList.component';
import { EquipoDetailComponent } from './equipoDetail/equipoDetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EquipoListComponent, EquipoDetailComponent],
  exports: [EquipoListComponent, EquipoDetailComponent]
})
export class EquipoModule { }
