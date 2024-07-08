import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesService implements OnInit {
  private dataUrl: string = 'assets/data.json'; // Path to your JSON file

  public countries:any = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  getData() {
    this.http.get<any>(this.dataUrl).pipe(take(1)).subscribe(countries => {
      this.countries = countries
    });
  }


}
