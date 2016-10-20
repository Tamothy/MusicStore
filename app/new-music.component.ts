import { Component, Output, EventEmitter } from '@angular/core';
import { Music } from './music.model';
//Add to cart
@Component({
  selector: 'new-music',
  template: `

  `
})

export class NewMusicComponent {
  @Output() newMusicSender = new EventEmitter();
  addClicked(artist: string, album: string, release: string, cover: string, price: string) {
    var newMusicToAdd: Music = new Music(artist, album, release, cover, price);
    this.newMusicSender.emit(newMusicToAdd);
  }
}
