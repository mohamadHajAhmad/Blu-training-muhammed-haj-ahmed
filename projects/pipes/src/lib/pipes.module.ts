import { NgModule } from '@angular/core';
import { FilterPipe } from './filter/filter.pipe';
import { PreRenderPipe } from './preRender/pre-render.pipe';
import { PipesComponent } from './pipes.component';



@NgModule({
  declarations: [
    PipesComponent,
    FilterPipe,
    PreRenderPipe
  ],
  imports: [
  ],
  exports: [
    PipesComponent,
    FilterPipe,
    PreRenderPipe
  ]
})
export class PipesModule { }
