import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { GridOfCardsComponent } from '../grid-of-cards/grid-of-cards.component';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent {
  @Input() product : any;
}
