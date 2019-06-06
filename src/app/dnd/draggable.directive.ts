import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  @Input() data: any;

  constructor(private el: ElementRef) {
    this.el.nativeElement.draggable = "true";
  }

  @HostListener("dragstart", ["$event"])
  onDragStart(e) {
    this.el.nativeElement.classList.add("drag-src");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", JSON.stringify(this.data));
  }

  @HostListener("dragend", ["$event"])
  onDragEnd(e) {
    e.preventDefault();
    this.el.nativeElement.classList.remove("drag-src");
  }
}
