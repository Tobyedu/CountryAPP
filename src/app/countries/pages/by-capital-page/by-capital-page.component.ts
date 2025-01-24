import { Component, Output, EventEmitter } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private readonly contriesService: CountriesService){}


  searchByCapital(term: string) {
    console.log({term});
    this.contriesService.searchCapital(term)
    .subscribe( countries=>
    {
      console.log({countries});
      this.countries = countries
    });
  }

}
