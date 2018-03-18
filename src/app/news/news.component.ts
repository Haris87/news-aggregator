import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    this.getNews().subscribe(news => this.news = news);
  }

  getNews() {
      return this.http.get<any[]>('http://localhost:3000/api/news');
  }

}
