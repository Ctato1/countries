import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesService implements OnInit {
  private dataUrl: string = 'assets/data.json'; // Path to your JSON file

  public countries: any = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getData();
  }

  // getData() {
  //   this.http.get<any>(this.dataUrl).subscribe(countries => {
  //     this.countries = countries
  //   });
  // }
  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl).pipe(tap(res=> this.countries = res));
  }

  getCardInfo(name: string) {
    return this.countries.find((item: any) => item.name === name);
  }

  findBorder(country: any): any[] {
    let countryBorders = country?.borders.map((item: any) => item);
    return countryBorders.reduce((acc: any[], item: string) => {
      const borderCountries = this.countries.filter((country: any) => country.alpha3Code === item);
      return acc.concat(borderCountries);
    }, []);
  }

}
