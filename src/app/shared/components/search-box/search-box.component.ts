import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input()
  public placeholderhijo: string = '';

  @Output()
  public onValue = new EventEmitter<string>();


  // @ViewChild('txtInput')
  // public txtInput!: ElementRef<HTMLInputElement>;

  public emitValue(value: string ) {
    this.onValue.emit(value);
  }











}
