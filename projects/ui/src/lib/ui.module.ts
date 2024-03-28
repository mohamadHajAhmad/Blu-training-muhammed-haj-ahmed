import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'projects/pipes/src/public-api';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UiComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule
  ],
  exports: [
    UiComponent,
    TableComponent
  ]
})
export class UiModule { }
