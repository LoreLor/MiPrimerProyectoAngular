//declaramos el decorador que acompaña a la clase
import { Component } from "@angular/core";

@Component({
    //agrego referencias 
    selector:'app-empleados',
    templateUrl:'./empleados.component.html',
    styleUrls:['./empleados.component.css']
})

//declaramos la clse raiz empleados, indicamos elcance global

export class EmpleadosComponent{
    
}