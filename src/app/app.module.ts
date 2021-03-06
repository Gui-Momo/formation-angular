import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

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

import { Grapheme, GraphemeType } from "./grapheme/grapheme.model";
import { Word } from "./word/word.model";

import { SoundService } from "./sound/sound.service";
import { GraphemeService, LanguageGraphemes } from './grapheme/grapheme.service';
import { WordGraphemeService } from "./word-grapheme/word-grapheme.service";
import { WordService } from "./word/word.service";

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
    WordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SoundService,
    GraphemeService,
    WordGraphemeService,
    WordService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
