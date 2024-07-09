import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";

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

  getData() {
    console.log(this.dataUrl)
    this.http.get<any>(this.dataUrl).subscribe(countries => {
      this.countries = countries
    });
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
