import { NgModule } from '@angular/core';
import { PipesComponent } from './pipes.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    PipesComponent,
    FilterPipe
  ],
  imports: [
  ],
  exports: [
    PipesComponent,
    FilterPipe
  ]
})
export class PipesModule { }
