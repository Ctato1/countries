import {Component, Input} from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card:any;

  constructor(private  router:Router) {
  }
  onNavigate(){
    this.router.navigate([this.card?.name])
  }

}
