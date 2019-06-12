import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { ChildLevel } from "../child/child.model"

@Component({
  selector: 'app-level-selector',
  templateUrl: './level-selector.component.html',
})
export class LevelSelectorComponent implements OnInit {

  @Input() level: ChildLevel;
  @Output() levelChange = new EventEmitter<ChildLevel>();

  levels = [
    { label: "Petit", value: ChildLevel.petit },
    { label: "Moyen", value: ChildLevel.moyen },
    { label: "Grand", value: ChildLevel.grand }
  ]

  constructor() { }

  ngOnInit() {
  }

  onChange(level) {
    this.level = level;
    this.levelChange.emit(this.level);
  }
}
