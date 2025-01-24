import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  @Input()
  public countries: Country[]= [];




  constructor(
    private readonly countriesService: CountriesService
  ){}



  searchByRegion(region: string) {
   this.countriesService.searchRegion(region)
   .subscribe(
    countries=> {
      console.log({countries});
      this.countries = countries;
    }
   )
  }

}
