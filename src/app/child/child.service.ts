import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

import { Child } from "./child.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class ChildService {
  private childrenUrl = "api/children";

  constructor(private http: HttpClient) { }

  getChildren(): Observable<Child[]> {
    return this.http
      .get<Child[]>(this.childrenUrl)
      .pipe(map(children => children as Child[]));
  }

  getChild(id: number): Observable<Child> {
    return this.http.get<Child>(`${this.childrenUrl}/${id}`);
  }

  addChild(child: Child): Observable<Child> {
    return this.http.post<Child>(this.childrenUrl, child, httpOptions);
  }

  saveChild(child: Child): Observable<Child> {
    return this.http.put<Child>(
      `${this.childrenUrl}/${child.id}`,
      child,
      httpOptions
    );
  }
  deleteChild(child: Child | number): Observable<Child> {
    const id = typeof child === "number" ? child : child.id;
    const url = `${this.childrenUrl}/${id}`;

    return this.http.delete<Child>(url, httpOptions);
  }
}