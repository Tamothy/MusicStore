import { Component, Output, EventEmitter } from '@angular/core';
import { Music } from './music.model';
//Add to cart
@Component({
  selector: 'new-music',
  template: `
  <div class="well">
    <h3>View Cart</h3>
    <div>
      <label>Enter Artist:</label>
      <input #newArtist>
      <label>Enter Album:</label>
      <input #newAlbum>
      <label>Release Date:</label>
      <input #newRelease>
      <input #newCover>
      <input #newPrice>
    </div>
    </div>
    <div>
      <button class="btn btn-lg" (click)="
        addClicked(newArtist.value, newAlbum.value, newRelease.value,newCover.value, newPrice.value);
        newArtist.value='';
        newAlbum.value='';
        newRelease.value='';
        newCover.value='';
        newPrice.value='';
      ">Add</button>
    </div>
  `
})

export class NewMusicComponent {
  @Output() newMusicSender = new EventEmitter();
  addClicked(artist: string, album: string, release: string, cover: string, price: string) {
    var newMusicToAdd: Music = new Music(artist, album, release, cover, price);
    this.newMusicSender.emit(newMusicToAdd);
  }
}
