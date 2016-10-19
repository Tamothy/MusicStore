import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Music} from './music.model';

@Component({
  selector: 'edit-music',
  template: `
    <div *ngIf="childSelectedMusic">
      <h1>Edit Music</h1>
      <div>
        <label>Enter Artist:</label>
        <input [(ngModel)]="childSelectedMusic.artist">
      </div>
      <div>
        <button (click)="inInventoryClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMusicComponent {
  @Input() childSelectedMusic: Music;
  @Output() inInventoryClickedSender = new EventEmitter();
  inInventoryClicked() {
    this.inInventoryClickedSender.emit();
  }
}
