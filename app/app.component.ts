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
  ];
  showKegForm = null;
  selectedKeg = null;

  addNewKegForm(clickedKeg){
    this.showKegForm = !null;
  }

  nullKegForm() {
    this.showKegForm = null;
  }

  editKeg(clickedKeg) {
    console.log("hello")
    this.selectedKeg = clickedKeg;
  }

  nullEdit() {
    this.selectedKeg = null;
  }

  addKeg(){
    this.kegs.push(new Keg(this.name, this.type, this.price, this.alcoholContent, this.pints));
  }

  clearInput() {
    this.name = "";
    this.type = "";
    this.price = null;
    this.pints = null;
  }

  priceColor(currentPrice) {
    if (currentPrice > 5) {
      return "bg-danger";
    } else if (currentPrice > 3) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  abvColor(strength) {
    if (strength > 6) {
      return "bg-danger"
    } else if (strength > 5) {
      return "bg-warning"
    } else {
      return "bg-success"
    }
  }
}

export class Keg {
  constructor(public name: string, public type: string, public price: number, public alcoholContent: number, public pints: number = 124) {

  }

  sellPint() {
    if (this.pints > 10) {
      this.pints --;
    } else {
      alert("You need more beer");
      this.pints --;
    }
  }

  sellGrowler() {
    if (this.pints > 10) {
      this.pints -= 2;
    } else {
      alert("You need more beer");
      this.pints -= 2;
    }
  }

  sellLarge() {
    if (this.pints > 10) {
      this.pints -= 4;
    } else {
      alert("You need more beer");
      this.pints -= 4;
    }
  }
}
