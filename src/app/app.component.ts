import {Component, OnInit} from '@angular/core';
import {CountriesService} from "./shared/countries.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private countriesService:CountriesService) {
  }
  ngOnInit() {
    this.countriesService.getData();
  }
}
