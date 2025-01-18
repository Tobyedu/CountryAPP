import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  public term: string = '';

  searchByCapital(term: string) {
    console.log(term);
  }

}
