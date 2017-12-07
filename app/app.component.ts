import { Component } from '@angular/core';
import { Keg } from './keg.model';

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

  public masterBeerList: Keg[] = [
    new Keg('RPM','IPA', 5, 6.5,124),
    new Keg('PBR', 'Lager', 2, 4.7,124),
    new Keg('Lagunitas', 'IPA', 6, 6.2,124)
  ];


  showKegForm = null;
  selectedKeg = null;

  addNewKegForm(kegToEdit){
    this.showKegForm = !null;
    console.log("Mariah Carey")
  }

  nullKegForm() {
    this.showKegForm = null;
    console.log("All I want for Christmas is You")
  }

  editKeg(kegToEdit) {
    console.log("hello")
    this.selectedKeg = kegToEdit;
  }

  nullEdit() {
    this.selectedKeg = null;
    console.log("Kelly Clarkson")
  }

  addKeg(newKegFromChild: Keg){
    this.masterBeerList.push(newKegFromChild);
  }

  clearInput() {
    this.name = "";
    this.type = "";
    this.price = null;
    this.pints = null;
  }


}
