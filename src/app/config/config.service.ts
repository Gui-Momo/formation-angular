import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Config } from "./config.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class ConfigService {
  private configsUrl = "api/configs";

  constructor(private http: HttpClient) { }

  getConfigs(): Observable<Config[]> {
    return this.http
      .get<Config[]>(this.configsUrl)
      .pipe(map(config => config as Config[]));
  }

  getConfig(id: number): Observable<Config> {
    return this.http.get<Config>(`${this.configsUrl}/${id}`);
  }

  addConfig(config: Config): Observable<Config> {
    return this.http.post<Config>(this.configsUrl, config, httpOptions);
  }

  saveConfig(config: Config): Observable<Config> {
    return this.http.put<Config>(
      `${this.configsUrl}/${config.id}`,
      config,
      httpOptions
    );
  }
}