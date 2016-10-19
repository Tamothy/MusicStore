import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Music } from './music.model';


@Component({
  selector: 'music-list',
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all">Show All</option>
  <option value="isDone">Show Done</option>
  <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <div *ngFor="let currentMusic of childMusicList | completeness:selectedCompleteness">
  <music-display [music]="currentMusic"></music-display>
  <button class="btn btn-lg" (click)="editButtonHasBeenClicked(currentMusic)">Edit</button>
  </div>
  `
})

export class MusicListComponent {
  @Input() childMusicList: Music[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(musicToEdit: Music) {
    this.clickSender.emit(musicToEdit);
  }
}
