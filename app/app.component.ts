import { Component } from '@angular/core';
import { Music } from './music.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>North West Music</h1>
    <music-list
      [childMusicList]="masterMusicList"
      (clickSender)="showDetails($event)"
     ></music-list>
    <edit-music
      [childSelectedMusic]="selectedMusic"
      (doneClickedSender)="finishedEditing()"
    ></edit-music>
    <new-music
      (newSender)="addMusic($event)"
    ></new-music>
  </div>
  `
})

export class AppComponent {
  public masterMusicList: Music[] = [
      new Music("Five Finger Death Punch"),
      new Music("Nightwish"),
      new Music("Theory of a Deadman"),
      new Music("Black Sabbath")
  ];
  selectedMusic: Music = null;
  showDetails(clickedMusic: Music) {
    this.selectedMusic = clickedMusic;
  }
  finishedEditing() {
    this.selectedMusic = null;
  }
  addMusic(newMusicFromChild: Music) {
    this.masterMusicList.push(newMusicFromChild);
  }
}
