import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   output : String[][];
  baris = 0;
  kolom = 0;
  turn = "1";
  winner : String;

  constructor() {
    this.output = [];
    for(var i = 0; i < 5; i++) {
      this.output[i] = [];
      for(var j = 0; j < 5; j++) {
        this.output[i][j] = "*";
      }
    }
  }
  

  DONE(){
     
     var win = "belum";
     var cnt = 0;

    this.output[this.baris - 1][this.kolom - 1] = this.turn;

    
    //horizontal check
     for (var i = 0; i < 5; i++) {
      cnt = 0;
      for (var j = 0; j < 5; j++) {
        if (this.output[i][j] == this.turn) {
          cnt++;
        } else {
          cnt = 0;
        }
      }
      if (cnt >= 4) {
        win = this.turn;
      }
    }

    //vertical check

     if (win == "belum") {
      for (var i = 0; i < 5; i++) {
        cnt = 0;
        for (var j = 0; j < 5; j++) {
          if (this.output[j][i] == this.turn) {
            cnt++;
          } else {
            cnt = 0;
          }
        }
        if (cnt >= 4) {
          win = this.turn;
        }
      }
    }
    
    if(win != "belum"){
      this.winner = "Pemenangnya adalah Player" + this.turn;
    }
    else {
      if(this.turn == "1"){
      this.turn = "2";
    }
    else{
      this.turn = "1";
    }
    }
    

  }
}
