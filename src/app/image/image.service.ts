import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  validateImages() {
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

  uploadImage(file: File, word): Observable<any> {
    const formData = new FormData();
    formData.append('image', file, (word._fileName + '.jpg'));
    return this.http.post('api/img/', formData);
  }
}
