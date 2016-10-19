import { Component, Output, EventEmitter } from '@angular/core';
import { Music } from './music.model';

@Component({
  selector: 'new-music',
  template: `
    <h1>New Music</h1>
    <div>
      <label>Enter Artist:</label>
      <input #newArtist>
    </div>
    <div>
      <button (click)="
        addClicked(newArtist.value);
        newArtist.value='';
      ">Add</button>
    </div>
  `
})

export class NewMusicComponent {
  @Output() newMusicSender = new EventEmitter();
  addClicked(artist: string) {
    var newMusicToAdd: Music = new Music(artist);
    this.newMusicSender.emit(newMusicToAdd);
  }
}
