import { Component } from '@angular/core';
import { Music } from './music.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>North West Music</h1>
    <h3>You love it, we have it!</h3>
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
      new Music("Black Sabbath","Paranoid","1970", "https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg","$9.99"),
      new Music("Frank Sinatra","Close To You","1957", "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Sinatraclosetoyou.jpg/220px-Sinatraclosetoyou.jpg","$9.99"),
      new Music("AC/DC", "Dirty Deeds Done Dirt Cheap","1976", "https://images-na.ssl-images-amazon.com/images/I/61kaLXCXVbL.jpg","$9.99"),
      new Music("Led Zepplin","Led Zepplin IV","1971", "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg","$9.99"),
      new Music("Boston","More Than a Feeling","1976", "https://upload.wikimedia.org/wikipedia/en/2/23/BostonBoston.jpg","$9.99"),
      new Music("Nat King Cole", "L.O.V.E","1965", "http://cdn.shopify.com/s/files/1/0171/7522/products/CSC_0416_1024x1024.jpg?v=1388357442","$9.99"),
      new Music("My Chemical Romance","Black Parade","2006", "https://upload.wikimedia.org/wikipedia/en/e/ea/Blackparadecover.jpg","$9.99"),
      new Music("Green Day","American Idiot", "2004", "https://upload.wikimedia.org/wikipedia/en/2/2b/Green_Day_-_American_Idiot_cover.jpg","$9.99"),
      new Music("Linkin Park","Hybrid Theory","2000", "https://i.scdn.co/image/bec4a40aa4ac10b3e5518cf1dcbca33d1e5121ec","$9.99")
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
