import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  currentFocus: string = 'Tap Room';
  public name: string
  public type: string
  public price: number
  public alcoholContent: number
  public pints: number
  public kegs: Keg[] = [
    new Keg('RPM','IPA', 5, 6.5,124),
    new Keg('PBR', 'Lager', 2, 4.7,124),
    new Keg('Lagunitas', 'IPA', 6, 6.2,124)
  ]
  showKegForm = null;

  addNewKegForm(clickedKeg){
    this.showKegForm = !null;
  }

  addKeg(){
    this.kegs.push(new Keg(this.name, this.type, this.price, this.alcoholContent, 124));
  }
  clearInput() {
    this.name = "";
    this.type = "";
    this.price = null;
    this.alcoholContent = null;
  }
  sellBooze(currentPint) {
    console.log(currentPint);
    currentPint -= 1;
    console.log(currentPint);
  }
}

export class Keg {
  public done: boolean = false;
  constructor(public name: string, public type: string, public price: number, public alcoholContent: number, public pints: number) {

  }
}
