import { Component, Input } from '@angular/core';
import { Music } from './music.model';
//Display Selection
@Component({
  selector: 'music-display',
  template: `
  <div id="music">
      <input *ngIf="music.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
      <input *ngIf="music.done === false" type="checkbox" (click)="toggleDone(true)"/>
      <div ng-app="myApp" ng-controller="customersCtrl">
      <table>
      <tr ng-repeat ="x in music">
      <label>{{ music.artist }}</label><br>
      <label>{{ music.album }}</label><br>
      <label>{{ music.release }}</label><br>
      <label>{{ music.price }}</label><br>
      </tr>
      <td><label><img src="{{ music.cover }}"></label></td><br>
    </table>
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
