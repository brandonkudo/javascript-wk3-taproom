import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  templateUrl: 'app/new-keg.component.html'
})

export class NewKegComponent {
  @Input() childShowKegForm;
  @Output() newKegSender = new EventEmitter();
  @Output() exitNewKegFormClickedSender = new EventEmitter();

  submitForm(name: string, type: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, type, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }

  exitNewKegFormClicked() {
    this.exitNewKegFormClickedSender.emit();
  }
}
