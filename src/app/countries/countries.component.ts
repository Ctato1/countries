import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../shared/countries.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnInit{
  cards!:any;
  constructor(private countriesService:CountriesService) {
  }
  ngOnInit() {
    this.cards = this.countriesService.countries;
    console.log(this.countriesService.countries)
  }
}
