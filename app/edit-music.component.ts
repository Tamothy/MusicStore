import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Music } from './music.model';
//You can edit your cart here
@Component({
  selector: 'edit-music',
  template: `
    <div *ngIf="childSelectedMusic" class="well">
      <h3>Edit Cart</h3>
      <div>
        <label>Edit Artist:</label>
        <input [(ngModel)]="childSelectedMusic.artist">
        <label>Edit Album:</label>
        <input [(ngModel)]="childSelectedMusic.album">
        <label>Edit Release Date:</label>
        <input [(ngModel)]="childSelectedMusic.release">
      </div>
      <div>
        <button class="btn btn-lg" (click)="doneClicked()">Done</button>
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
