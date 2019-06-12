import { Component, OnInit, Input } from '@angular/core';
import { Child, ChildLevel } from './child.model';
import { ChildService } from './child.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() child: Child = new Child();

  submitMsg: string = "Créer";

  constructor(
    private childService: ChildService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.childService.getChild(+id).subscribe(child => {
        this.child = child;
        this.submitMsg = "Modifier";
      });
    }
  }

  create() {
    this.childService.addChild(this.child).subscribe(child => {
      this.goBack();
    });
  }

  save() {
    this.childService.saveChild(this.child).subscribe(child => {
      this.goBack();
    });
  }

  onSubmit() {
    if (this.child.id !== -1) {
      this.save();
    } else {
      this.create();
    }
  }

  goBack(): void {
    this.location.back();
  }

  onLevelUpdate(level) {
    this.child.level = level;
    // If child has no specific level
    if (this.child.configId <= ChildLevel.grand) {
      this.child.configId = level;
    }
  }
}
