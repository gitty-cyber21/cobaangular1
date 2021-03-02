import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(
      private router : Router
  )
  {
    
    
  }

  textnama : String;

  OPENHALLOGIN(){
    this.router.navigate(["/home/" + this.textnama]);
  
  }
}
