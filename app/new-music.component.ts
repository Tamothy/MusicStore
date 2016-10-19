import { Component, Output, EventEmitter } from '@angular/core';
import { Music } from './music.model';

@Component({
  selector: 'new-music',
  template: `
  <div class="well">
    <h3>New Artist</h3>
    <div>
      <label>Enter Artist:</label>
      <input #newArtist>
      <label>Enter Album:</label>
      <input #newAlbum>
      <label>Release Date:</label>
      <input #newRelease>
    </div>
    </div>
    <div>
      <button class="btn btn-lg" (click)="
        addClicked(newArtist.value, newAlbum.value, newRelease.value);
        newArtist.value='';
        newAlbum.value='';
        newRelease.value='';
      ">Add</button>
    </div>
  `
})

export class NewMusicComponent {
  @Output() newMusicSender = new EventEmitter();
  addClicked(artist: string, album: string, release: string) {
    var newMusicToAdd: Music = new Music(artist, album, release);
    this.newMusicSender.emit(newMusicToAdd);
  }
}
