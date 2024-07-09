import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CountriesService} from "../shared/countries.service";
import {Subscription} from "rxjs";
import {Location} from '@angular/common';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit, OnDestroy {

  private routeSubscription!: Subscription;

  countryInfo: any;
  countryBorders!: any;

  constructor(private route: ActivatedRoute, private countriesService: CountriesService, private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      console.log(params['id'])
      this.countryInfo = this.countriesService.getCardInfo(params['id']);
      if (this.countryInfo?.borders !== undefined) {
        this.countryBorders = this.countriesService.findBorder(this.countryInfo)
      }else{
        this.countryBorders = null;
      }
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  onNavigate(name: string): void {
    this.router.navigate([`${name}`])
  }

  onBack(): void {
    this.location.back();
  }
}
