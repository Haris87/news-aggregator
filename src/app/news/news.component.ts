import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../news';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  page: number;
  reverse: boolean;

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    this.page = 1;
    this.reverse = false;
    this.getNews(this.page).subscribe(news => {
      this.news = this.news.concat(news);
    });
  }

  getNews(page: number) {
      console.log('getting news, page', page);
      let params = new HttpParams();
      params = params.append('page', String(page));
      return this.http.get<News[]>('http://localhost:3000/api/news', { params: params });
  }

  refresh(){
    this.page = 1;
    this.getNews(this.page).subscribe(news => {
      this.news = news;
    });
  }

  loadMore(){
    this.page++;
    console.log('loading more, page', this.page);
    this.getNews(this.page).subscribe(news => {
      this.news = this.news.concat(news);
    });
  }

  sortNewsByDate() {

    this.news = this.news.sort((a: News, b: News) => {

      if(this.reverse){
        return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
      } else {
        return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
      }

    });
    this.reverse = !this.reverse;
  }

  getIcon(item){
    return item.type.toLowerCase();
  }

}
