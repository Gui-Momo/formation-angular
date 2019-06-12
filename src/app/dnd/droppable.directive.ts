import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
/**
 * Adaptation of Mithun Patel's work
 * https://github.com/mithun-daa/ng2_dnd
 */
export class DroppableDirective {

  @Output() dropped: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) { }

  // On drop, get the data and convert it back to a JSON object
  // and fire off an event passing the data
  @HostListener("drop", ["$event"])
  onDrop(e) {
    e.preventDefault();
    this.el.nativeElement.classList.remove("over");
    let data = JSON.parse(e.dataTransfer.getData("text"));
    this.dropped.emit(data);
    return false;
  }

  // Add a style to indicate that this element is a drop target
  @HostListener("dragenter")
  onDragEnter() {
    this.el.nativeElement.classList.add("over");
  }

  // Remove the style
  @HostListener("dragleave")
  onDragLeave() {
    this.el.nativeElement.classList.remove("over");
  }

  @HostListener("dragover", ["$event"])
  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    return false;
  }
}
