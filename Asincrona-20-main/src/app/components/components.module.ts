import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaGetComponent } from './vista-get/vista-get.component';
import { ContenidoComponent } from './contenido/contenido.component';



@NgModule({
  declarations: [
    VistaGetComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VistaGetComponent,
    ContenidoComponent
  ]
})
export class ComponentsModule { }
