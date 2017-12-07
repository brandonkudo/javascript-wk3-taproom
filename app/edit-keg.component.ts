import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  templateUrl:'app/edit-keg.component.html'
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() closeButtonClickedSender = new EventEmitter();

  closeButtonClicked() {
    this.closeButtonClickedSender.emit();
  }
}
