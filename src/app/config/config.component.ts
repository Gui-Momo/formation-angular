import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { ConfigService } from "./config.service";
import { Config } from "./config.model";

@Component({
  selector: "app-config",
  templateUrl: "./config.component.html",
  styleUrls: ["./config.component.css"]
})
export class ConfigComponent implements OnInit {
  config: Config;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.configService.getConfig(+id).subscribe(config => {
        this.config = config;
      });
    }
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    this.configService.saveConfig(this.config).subscribe(config => {
      this.goBack();
    });
  }
}
