import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildComponent } from './child/child.component';

import { SoundService } from "./sound/sound.service";
import { GraphemeService } from './grapheme/grapheme.service';
import { WordGraphemeService } from "./word-grapheme/word-grapheme.service";
import { WordService } from "./word/word.service";
import { ChildService } from "./child/child.service"

import { DraggableDirective } from './dnd/draggable.directive';
import { DroppableDirective } from './dnd/droppable.directive';
import { LevelSelectorComponent } from './level-selector/level-selector.component';
import { AdminChildComponent } from './admin-child/admin-child.component';
import { AdminComponent } from './admin/admin.component';
import { ConfigComponent } from './config/config.component';
import { AdminConfigComponent } from './admin-config/admin-config.component';
import { ConfigService } from './config/config.service';

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
    DraggableDirective,
    DroppableDirective,
    DashboardComponent,
    ChildComponent,
    LevelSelectorComponent,
    AdminChildComponent,
    AdminComponent,
    ConfigComponent,
    AdminConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SoundService,
    GraphemeService,
    WordService,
    WordGraphemeService,
    ChildService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
