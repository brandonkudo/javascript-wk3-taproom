import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'beer-list',
  templateUrl: 'app/beer-list.component.html'
})

export class BeerListComponent {
  @Input() childBeerList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "lowToHigh";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  onChange(optionFromMenu) {
    console.log(optionFromMenu);
    this.filterByCompleteness = optionFromMenu;
  }

  // priceColor(currentPrice) {
  //   if (currentPrice > 5) {
  //     return "bg-danger";
  //   } else if (currentPrice > 3) {
  //     return "bg-warning";
  //   } else {
  //     return "bg-info";
  //   }
  // }
  //
  // abvColor(strength) {
  //   if (strength > 6) {
  //     return "bg-danger"
  //   } else if (strength > 5) {
  //     return "bg-warning"
  //   } else {
  //     return "bg-success"
  //   }
  // }
}
