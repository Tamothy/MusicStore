import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-music',
  template: `
    <div *ngIf="childSelectedMusic">
      <h1>Edit Music</h1>
      <div>
        <label>Enter Artist:</label>
        <input [(ngModel)]="childSelectedMusic.artist">
      </div>
      <div>
        <label>Enter Genre:</label>
        <input [(ngModel)]="childSelectedTask.id">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
