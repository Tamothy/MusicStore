import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MusicListComponent } from './music-list.component';
import { EditMusicComponent } from './edit-music.component';
import { NewMusicComponent } from './new-music.component';
import { InventoryPipe } from './inventory.pipe';
import { MusicComponent } from './music.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MusicListComponent,
    EditMusicComponent,
    NewMusicComponent,
    InventoryPipe,
    MusicComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
