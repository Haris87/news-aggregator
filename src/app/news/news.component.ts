import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../news';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../app.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  searchTerm: string = "";
  page: number = 1;
  reverse: boolean = false;

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    this.getNews(this.page).subscribe(news => {
      this.news = this.news.concat(news);
    });
  }

  search(term:string){
    console.log(term);
    this.page = 1;
    this.getNews(this.page, term).subscribe(news => {
      this.news = news;
    });
  }

  getNews(page: number, term?: string) {
      console.log('getting news', page, term);
      let params = new HttpParams();
      params = params.append('page', String(page));

      if(term === undefined) term = ""

      return this.http.get<News[]>('/api/news/'+term, { params: params });
  }

  refresh(){
    this.page = 1;
    this.searchTerm = "";
    this.getNews(this.page, this.searchTerm).subscribe(news => {
      this.news = news;
    });
  }

  loadMore(){
    this.page++;
    console.log('loading more, page', this.page);
    this.getNews(this.page, this.searchTerm).subscribe(news => {
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
