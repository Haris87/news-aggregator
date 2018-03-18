import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  sources: any[];

  ngOnInit() {
    this.getSources().subscribe(sources => this.sources = sources);
  }

  getSources() {
    return this.http.get<any[]>('http://localhost:3000/api/source');
  }

}
