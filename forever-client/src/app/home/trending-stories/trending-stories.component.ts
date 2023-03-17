import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-stories',
  templateUrl: './trending-stories.component.html',
  styleUrls: ['./trending-stories.component.scss']
})
export class TrendingStoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getStoryUrl(trendingMoStory) {
    return "/story/" + trendingMoStory.storyId;
  }

  getTrendingStories() {
    return [
      {
        storyId: "1",
        imageSrc: "../../assets/picture1.png",
        desc: "קצין משמרות חותך את הזקן הרב מיידניק, 1943"
      },
      {
        storyId: "2",
        imageSrc: "../../assets/picture1.png",
        desc: "קצין משמרות חותך את הזקן הרב מיידניק, 1943"
      },
      {
        storyId: "3",
        imageSrc: "../../assets/picture1.png",
        desc: "קצין משמרות חותך את הזקן הרב מיידניק, 1943"
      }
    ]
  }
}
