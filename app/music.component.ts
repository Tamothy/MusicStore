import { Component, Input } from '@angular/core';
import { Music } from './music.model';
//Display Selection
@Component({
  selector: 'music-display',
  template: `
  <div class="container">
    <div class ="row">
      <div class ="col-sm-4">
      <input *ngIf="music.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
      <input *ngIf="music.done === false" type="checkbox" (click)="toggleDone(true)"/>
      <label>{{ music.artist }}</label><br>
      <label>{{ music.album }}</label><br>
      <label>{{ music.release }}</label><br>
      <label><img src="{{ music.cover }}"></label><br>
      <label>{{ music.price }}</label>
      </div>
    </div>
  </div>
  `
})
export class MusicComponent {
  @Input() music: Music;
  toggleDone(setCompleteness: boolean) {
    this.music.done = setCompleteness;
    console.log(this.music);
  }
}
