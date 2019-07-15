import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  extension: String = "";

  validateImages() {
    let inputs = document.getElementsByClassName("input") as unknown as HTMLInputElement[];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value) {
        let fileName = inputs[i].value;
        let ext = fileName.substring(fileName.lastIndexOf('.') + 1);
        if (ext == "gif" || ext == "GIF") {
          console.log('file accepted');
          this.extension = '.gif';
          return true;
        } else if (ext == "jpeg" || ext == "JPEG") {
          console.log('file accepted');
          this.extension = '.jpeg';
          return true;
        } else if (ext == "jpg" || ext == "JPG") {
          console.log('file accepted');
          this.extension = '.jpg';
          return true;
        } else if (ext == "png" || ext == "PNG") {
          console.log('file accepted');
          this.extension = '.png';
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

  uploadImage(file: File, word): Observable<any> {
    const formData = new FormData();
    formData.append('image', file, (word._fileName + this.extension));
    return this.http.post('api/img/', formData);
  }
}
