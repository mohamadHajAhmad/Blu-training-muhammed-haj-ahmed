import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    UiComponent,
    TableComponent
  ],
  imports: [
  ],
  exports: [
    UiComponent,
    TableComponent
  ]
})
export class UiModule { }
