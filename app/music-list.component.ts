import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Music} from './music.model';

@Component({
  selector: 'music-list',
  template: `
  <div class="inventory">
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all">Show All</option>
  <option value="isLow">Show Low Inventory</option>
  </select>
  </div>
  <div *ngFor="let currentMusic of childMusicList | Inventory:selectedInventory">
  <music-display [music]="currentMusic"></music-display>
  <button class="btn btn-lg" (click)="editButtonHasBeenClicked(currentMusic)">Edit</button>
  </div>
  `
})

export class MusicListComponent {
  @Input() childMusicList: Music[];
  @Output() clickSender = new EventEmitter();
  public selectedInventory: string = "noInventory";
  onChange(optionFromMenu) {
    this.selectedInventory = optionFromMenu;
    console.log(this.selectedInventory);
  }
  editButtonHasBeenClicked(musicToEdit: Music) {
    this.clickSender.emit(musicToEdit);
  }
}
