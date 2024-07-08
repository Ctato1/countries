import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountriesService} from "../shared/countries.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit,OnDestroy {

  private routeSubscription!:Subscription;

  // currentCountry!: string;
  countryInfo:any;
  countryBorders!:any;
  constructor(private route: ActivatedRoute,private countriesService:CountriesService) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params=>{
      console.log(params['id'])
      this.countryInfo = this.countriesService.getCardInfo(params['id']);
      this.countryBorders = this.countriesService.findBorder(this.countryInfo)
      console.log(this.countryBorders)
    })
    // this.currentCountry = this.route.snapshot.params['id'];
    console.log(this.countryInfo)
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
