import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any[];
  reverse: boolean;

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    this.reverse = false;
    this.getNews().subscribe(news => {
      this.news = news;
      this.sortNewsByDate();
    });
  }

  getNews() {
      return this.http.get<any[]>('http://localhost:3000/api/news');
  }

  sortNewsByDate() {

    this.news = this.news.sort((a: any, b: any) => {

      if(this.reverse){
        return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
      } else {
        return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
      }

    });
    this.reverse = !this.reverse;
  }

}