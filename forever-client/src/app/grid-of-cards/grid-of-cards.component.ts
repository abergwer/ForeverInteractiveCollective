import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-of-cards',
  templateUrl: './grid-of-cards.component.html',
  styleUrls: ['./grid-of-cards.component.scss']
})
export class GridOfCardsComponent {

  constructor(private http : HttpClient){}

    products = [{title: 'polland', shortDescription: 'shortDescription', imageUrl : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/96/223737085b4fca8d5b4a271504d75e/Holocaust_RedV1.jpg?auto=format%2Ccompress&dpr=1", description: 'description'},
    {title: 'polland', shortDescription: 'shortDescription', imageUrl : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/96/223737085b4fca8d5b4a271504d75e/Holocaust_RedV1.jpg?auto=format%2Ccompress&dpr=1", description: 'description'},
    {title: 'polland', shortDescription: 'shortDescription', imageUrl : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/96/223737085b4fca8d5b4a271504d75e/Holocaust_RedV1.jpg?auto=format%2Ccompress&dpr=1", description: 'description'},
    {title: 'polland', shortDescription: 'shortDescription', imageUrl : "https://wpvip.edutopia.org/wp-content/uploads/2022/11/hero_blog_History-Social-Studies_photo_alamy_BNHW8E_Prisma.jpg?w=2880&quality=85", description: 'description'},
    {title: 'polland', shortDescription: 'shortDescription', imageUrl : "https://wpvip.edutopia.org/wp-content/uploads/2022/11/hero_blog_History-Social-Studies_photo_alamy_BNHW8E_Prisma.jpg?w=2880&quality=85", description: 'description'},
    {title: 'polland', shortDescription: 'shortDescription', imageUrl : "https://wpvip.edutopia.org/wp-content/uploads/2022/11/hero_blog_History-Social-Studies_photo_alamy_BNHW8E_Prisma.jpg?w=2880&quality=85", description: 'description'},
    {title: 'polland', shortDescription: 'shortDescription', imageUrl : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/96/223737085b4fca8d5b4a271504d75e/Holocaust_RedV1.jpg?auto=format%2Ccompress&dpr=1", description: 'descriptio nassssssss sssssssss  ssss'},
    {title: 'polland', shortDescription: 'hello', imageUrl : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/96/223737085b4fca8d5b4a271504d75e/Holocaust_RedV1.jpg?auto=format%2Ccompress&dpr=1", description: 'description'},
    {title: 'polland', shortDescription: 'hello', imageUrl : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/96/223737085b4fca8d5b4a271504d75e/Holocaust_RedV1.jpg?auto=format%2Ccompress&dpr=1", description: 'hello'}]
}