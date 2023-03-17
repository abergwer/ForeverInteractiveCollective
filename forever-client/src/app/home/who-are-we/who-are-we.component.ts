import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss']
})
export class WhoAreWeComponent implements OnInit {
  data : any;
  constructor() {
    this.data =  [
      {img : "../../../assets/circle orange.png",
       text: "נרשמים למערכת ומעלים את התמונות שברשותכם לשתף בארכיון השואה הקולקטיבי עם שאר העולם"},
      {img : "../../../assets/circle orange.png",
       text: "מזינים את פרטי התמונה, מיקום צילום התמונה, תיאור המופיע ופרטי האנשים על-מנת לבנות סיפור"},
      {img : "../../../assets/circle orange.png",
       text: "המערכת תריץ אלגוריתמים על התמונה בכדי לשפר את איכותה ולצבוע אותה בצבעים עכשוויים"},
      {img : "../../../assets/circle orange.png",
       text: "בונים את ארכיון השואה השיתופי ותורמים להנצחת השואה וחינוך הדור העתידי"}
    ]
    // this.data = "fasfas"
   }


  ngOnInit(): void {
  }

}
