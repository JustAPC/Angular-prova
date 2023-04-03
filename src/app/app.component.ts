import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  cuisines: any;
  restaurants: any;

  constructor(private service:PostService) {}

  ngOnInit() {
      this.service.getCuisinesList()
        .subscribe(response => {
          this.cuisines = response;
          console.log(this.cuisines);
        });

      this.service.getRestaurantsList()
        .subscribe(response => {
          this.restaurants = response;
          console.log(this.restaurants);
        });
  }
}
