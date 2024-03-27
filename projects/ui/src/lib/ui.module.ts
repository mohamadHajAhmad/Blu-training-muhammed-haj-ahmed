import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UiComponent,
    TableComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent,
    TableComponent
  ]
})
export class UiModule { }
