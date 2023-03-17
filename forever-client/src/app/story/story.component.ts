import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  id: number;
  constructor(private activatedRoute: ActivatedRoute) {
    this.id = 0;

  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => { this.id = params['id'] });
  }
}
