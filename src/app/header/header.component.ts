import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDark: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const theme: string | null = localStorage.getItem('theme')
      if (theme === 'dark') {
        document.documentElement.setAttribute("data-theme", 'dark');
        this.isDark = true;
      } else {
        document.documentElement.setAttribute("data-theme", 'light');
        this.isDark = false;
      }
    }

  }

  onChangeMode() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute("data-theme", this.isDark ? 'dark' : 'light');
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
  }

}
