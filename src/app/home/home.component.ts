import { HttpClient } from '@angular/common/http';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private images: ImageService) { }

  imageList = <any>[];

  ngOnInit(): void {
    this.images.getImages().subscribe((data: any) => {
      this.imageList = data.results;
      console.log(this.imageList);
    });
    this.mostPopular();
  }

  mostPopular(){
    let sortedByLikes = this.imageList.sort((a:any,b:any) => b.likes - a.likes);
    this.imageList = sortedByLikes;
  }

  latestShows(){
    let sortedByDate = this.imageList.sort((a:any,b:any) => Date.parse(b.created_at) - Date.parse(a.created_at));
    this.imageList = sortedByDate;
    sortedByDate.forEach((element:any) => {
      console.log(element.created_at);
    });
  }

  trendingShows(){
    let sortedByDate = this.imageList.sort((a:any,b:any) => Date.parse(a.created_at) - Date.parse(b.created_at));
    this.imageList = sortedByDate;
    sortedByDate.forEach((element:any) => {
      console.log(element.created_at);
    });
  }

}
