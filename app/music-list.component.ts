import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Music } from './music.model';


@Component({
  selector: 'music-list',
  template: `
  <button value ="all" (click)="onChange($event.target.value)" class="filter">Show Inventory
  </button>
  <button value="isDone" (click)="onChange($event.target.value)">View Cart</button> <!--we want to view selected music-->
  <div *ngFor="let currentMusic of childMusicList | completeness:selectedCompleteness">
  <music-display [music]="currentMusic"></music-display>
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
