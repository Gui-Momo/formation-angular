import { Component, OnInit } from "@angular/core";

import { Config } from "../config/config.model";
import { ConfigService } from "../config/config.service";
import { ChildLevel } from "../child/child.model";

@Component({
  selector: "admin-config",
  templateUrl: "./admin-config.component.html"
})
export class AdminConfigComponent implements OnInit {
  configs: Config[];
  levelEnum = ChildLevel;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.fetchConfigs();
  }

  fetchConfigs() {
    this.configService.getConfigs().subscribe(configs => {
      this.configs = configs;
    });
  }
}
