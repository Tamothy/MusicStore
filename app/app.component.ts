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
      new Music("Five Finger Death Punch","Wrong Side of Heaven", "2013"),
      new Music("Nightwish","Bye Bye Beautiful", "2008"),
      new Music("Theory of a Deadman", "Savages","2014"),
      new Music("Black Sabbath","Paranoid","1970")
  ];
  selectedMusic: Music = null;
  showDetails(clickedMusic: Music) {
    this.selectedMusic = clickedMusic;
    console.log(this.masterMusicList);
  }
  finishedEditing() {
    this.selectedMusic = null;
  }
  addMusic(newMusicFromChild: Music) {
    this.masterMusicList.push(newMusicFromChild);
  }
}
