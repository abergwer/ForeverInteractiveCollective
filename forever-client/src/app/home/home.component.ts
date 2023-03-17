

























import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMapClick(event: MouseEvent) {
    const svgElement = event.target as SVGAElement;
    const regionName = svgElement.getAttribute('name')
    // TODO: route to showcases/regionName
  }
}
