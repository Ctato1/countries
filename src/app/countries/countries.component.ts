import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../shared/countries.service";

interface ContinentProps {
  name: string;
}

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

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit() {
    this.cards = this.countriesService.countries;

  }

  onChange() {
    this.cards = this.countriesService.countries.filter((item: any) => item?.name.toLowerCase().includes(this.inputValue.toLowerCase()))
    this.selectedContinent =undefined;
  }

  onChangeContinents() {
    console.log(this.selectedContinent)
    if (this.selectedContinent?.name === "All") {
      this.cards = this.countriesService.countries;
    } else {
      this.cards = this.countriesService.countries.filter((item: any) => item?.region.toLowerCase().includes(this.selectedContinent?.name.toLowerCase()))

    }
    this.inputValue = "";
  }
}
