

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1';


  constructor(private httpClient: HttpClient) { }



  searchCountryByAlfaCode(code: string): Observable<Country | null>{

    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url).
    pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null))
    )



  }

  searchCapital( term: string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(()=> of([]))
    )
    //return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${term}`);
  }


  searchCountry(term: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${term}`;

    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )

  }

  searchRegion(term: string): Observable<Country[]>{

    const url = `${this.apiUrl}/region/${term}`;

    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
  }


}
