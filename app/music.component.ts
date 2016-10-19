import { Component, Input } from '@angular/core';
import {Music} from './music.model';

@Component({
  selector: 'music-display',
  template: `
  <div>
    <input *ngIf="music.inInventory === true" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="music.inInventory === false" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ music.artist }}</label>
  </div>
  `
})
export class MusicComponent {
  @Input() music: Music;
  toggleDone(setInventory: boolean) {
    this.music.inInventory = setInventory;
  }
}
