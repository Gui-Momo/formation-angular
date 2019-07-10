import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../word/word.model';
import { WordService } from '../word/word.service';
import { Location } from "@angular/common";


@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {

  @Input() word: Word;
  words: Word[];


  constructor(
    private wordService: WordService,
    private location: Location
  ) { }

  ngOnInit() {
    this.wordService.getWords().subscribe(words => {
      this.words = words;
      console.log(words[0]._fileName);
      console.log(words[0]._imageFile);
      this.words.forEach(word => {
        if (this.wordService.checkImage(word)) {
          word.setHasImage(true);
        }
      });
    });
  }

  uploadImg(word) {
    console.log(word);
  }

  checkFiles() {
    let inputs = document.getElementsByClassName("input") as unknown as HTMLInputElement[];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value) {
        let fileName = inputs[i].value;
        let ext = fileName.substring(fileName.lastIndexOf('.') + 1);
        if (ext == "gif" || ext == "GIF" || ext == "jpeg" || ext == "JPEG" || ext == "jpg" || ext == "JPG" || ext == "png" || ext == "PNG") {
          console.log('file accepted');
          return true;
        } else {
          alert("Format de fichier non valide");
          inputs[i].value = "";
          inputs[i].focus();
          return false;
        }
      }
    }
  }
}
