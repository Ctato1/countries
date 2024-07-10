import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {CountriesService} from "../shared/countries.service";

import {HttpClient} from '@angular/common/http';
import {TransferState, makeStateKey} from '@angular/platform-browser';
import {isPlatformBrowser} from "@angular/common";

interface ContinentProps {
  name: string;
}
const COUNTRIES_KEY = makeStateKey<any>('countries');
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnInit {
  cards!: any;
  inputValue!: string;
  continents: ContinentProps[] | undefined = [
    {name: 'All'},
    {name: 'Africa'},
    {name: 'America'},
    {name: 'Asia'},
    {name: 'Europe'},
    {name: 'Oceania'}
  ];

  selectedContinent: ContinentProps | undefined;

  constructor( private http: HttpClient,private countriesService: CountriesService, private state: TransferState,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    if (this.state.hasKey(COUNTRIES_KEY)) {
      this.cards = this.state.get(COUNTRIES_KEY, []);
    } else {
      this.getData();
    }
  }
  getData() {
    this.countriesService.getData().subscribe(countries => {
      this.cards = countries;
      if (isPlatformBrowser(this.platformId)) {
        this.state.set(COUNTRIES_KEY, countries);
      }
    });
  }
  onChange() {
    this.cards = this.countriesService.countries.filter((item: any) => item?.name.toLowerCase().includes(this.inputValue.toLowerCase()))
    this.selectedContinent = undefined;
  }

  onChangeContinents() {
    if (this.selectedContinent?.name === "All") {
      this.cards = this.countriesService.countries;
    } else {
      this.cards = this.countriesService.countries.filter((item: any) => item?.region.toLowerCase().includes(this.selectedContinent?.name.toLowerCase()))

    }
    this.inputValue = "";
  }
}
