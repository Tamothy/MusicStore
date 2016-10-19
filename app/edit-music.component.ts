import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Music } from './music.model';

@Component({
  selector: 'edit-music',
  template: `
    <div *ngIf="childSelectedMusic">
      <h1>Edit Listing</h1>
      <div>
        <label>Edit Artist:</label>
        <input [(ngModel)]="childSelectedMusic.artist">
      </div>
      <div>
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMusicComponent {
  @Input() childSelectedMusic: Music;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
