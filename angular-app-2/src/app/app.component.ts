import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Do dolor fugiat dolore nostrud est dolore duis id officia non amet.';
  enabled : boolean= false;

  //para la primera parte que tendremos 
  setEnabled() : void{
    // this.enabled=true;

    //despues de probar ese, se debe de poner este otro, que es para que se muestre y se oculte.
    this.enabled =this.enabled?false:true;
    console.log('se ha hecho clik en el boton')
  }
  //para la segunda parte 
  courses : string[]= [ 'Angular', '.Net', 'Spring boot', 'java'];
}
