import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country, Name } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  @Input()
  public countries: Country[]=[];

  constructor(private readonly countryService: CountriesService){}





  searchByCountry(term: string) {

    this.countryService.searchCountry(term)
    .subscribe(countries => {
      console.log({countries});
      this.countries = countries;
    })

  }



}
