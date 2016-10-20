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
      new Music("Five Finger Death Punch","Wrong Side of Heaven", "2013","https://images-na.ssl-images-amazon.com/images/I/61G5N3uFhhL.jpg","$9.99"),
      new Music("Nightwish","Dark Passion Play", "2008", "https://upload.wikimedia.org/wikipedia/en/5/5e/Dark_Passion_Play.jpg","$9.99"),
      new Music("Theory of a Deadman", "Savages","2014", "https://upload.wikimedia.org/wikipedia/en/1/17/Theory_of_a_Deadman_album_cover.jpg","$9.99"),
      new Music("Black Sabbath","Paranoid","1970", "https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg","$9.99")
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
