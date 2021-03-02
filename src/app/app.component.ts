import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(
      private router : Router,
      public globalvar : GlobalvarService
  )
  {
    
    
  }

  textnama = "";
  namaglobal;
  OPENHALLOGIN(){
    this.router.navigate(["/home/" + this.textnama]);
    this.globalvar.setnama(this.textnama);
    this.namaglobal = this.globalvar.getnama();
  }
}
