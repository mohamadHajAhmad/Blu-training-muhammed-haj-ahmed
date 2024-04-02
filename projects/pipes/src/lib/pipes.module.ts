import { NgModule } from '@angular/core';
import { PipesComponent } from './pipes.component';
import { FilterPipe } from './filter.pipe';
import { PreRenderPipe } from './preRender/pre-render.pipe';



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
