import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  rootDir = "assets/sounds";

  playSound(filename) {
    return new Promise((resolve, reject) => {
      const a = new Audio(`${this.rootDir}/${filename}.mp3`);
      a.play();
      a.addEventListener("ended", () => resolve());
      a.addEventListener("error", err => reject(err));
    });
  }

  constructor() { }
}


