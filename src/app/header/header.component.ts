import {Component, OnInit} from '@angular/core';
import {CountriesService} from "../shared/countries.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDark: boolean = false;

  constructor(private countriesService:CountriesService) {
  }
  ngOnInit() {
    // this.countriesService.getData();
    const theme:string | null = localStorage.getItem('theme')
    console.log(theme)
    if(theme === 'dark'){
      document.documentElement.setAttribute("data-theme",'dark');
      this.isDark = true;
    }else{
      document.documentElement.setAttribute("data-theme",'light');
      this.isDark = false;
    }
  }

  onChangeMode() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute("data-theme", this.isDark ? 'dark' : 'light');
    localStorage.setItem('theme', this.isDark ? 'dark': 'light')
  }

}
