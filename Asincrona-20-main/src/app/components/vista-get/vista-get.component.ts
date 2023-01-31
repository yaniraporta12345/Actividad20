import { Component } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-vista-get',
  templateUrl: './vista-get.component.html',
  styleUrls: ['./vista-get.component.css']
})
export class VistaGetComponent {

  constructor(private userService: ServicioService){}

  listado  = new Array();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.getUserAllInterceptor().subscribe({

      next:(response: any)=>{this.listado = response.body; console.log(response)},
      error:(e)=>{console.error(e)},
      complete:()=>console.info("La API devolvió todos los registros")
    })
  }
}
