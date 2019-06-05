import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictationComponent } from './dictation/dictation.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { RevealButtonComponent } from './reveal-button/reveal-button.component';
import { RoundedImgComponent } from './rounded-img/rounded-img.component';
import { WordImgComponent } from './word-img/word-img.component';
import { GraphemeComponent } from './grapheme/grapheme.component';
import { WordGraphemeComponent } from './word-grapheme/word-grapheme.component';
import { BoardGraphemeComponent } from './board-grapheme/board-grapheme.component';
import { WordComponent } from './word/word.component';
import { SoundService } from "./sound/sound.service";
import { GraphemeService } from './grapheme/grapheme.service';

@NgModule({
  declarations: [
    AppComponent,
    DictationComponent,
    IconButtonComponent,
    RevealButtonComponent,
    RoundedImgComponent,
    WordImgComponent,
    GraphemeComponent,
    WordGraphemeComponent,
    BoardGraphemeComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SoundService,
    GraphemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
