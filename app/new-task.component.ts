import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-music',
  template: `
    <h1>New Music</h1>
    <div>
      <label>Enter Artist:</label>
      <input #newArtist>
    </div>
    <div>
      <label>Enter Genre:</label>
      <input #newGenre>
      <button (click)="
        addClicked(newArtist.value, newGenre.value);
        newArtist.value='';
        newGenre.value='';
      ">Add</button>
    </div>
  `
})

export class NewMusicComponent {
  @Output() newMusicSender = new EventEmitter();
  addClicked(artist: string, genre: number) {
    var newMusicToAdd: Task = new Task(artist, genre);
    this.newMusicSender.emit(newMusicToAdd);
  }
}
