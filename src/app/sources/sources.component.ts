import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Source } from '../source';

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

  sources: Source[];
  source: Source;

  ngOnInit() {
    this.source = new Source();
    this.getSources().subscribe(sources => this.sources = sources);
  }

  getSources() {
    return this.http.get<Source[]>('http://localhost:3000/api/source');
  }

  addSource() {
    this.source.name = this.source.name.trim();
    if (!this.source.name) { return; }

    this.http.post<Source>('http://localhost:3000/api/source', this.source, httpOptions).subscribe(source => {
      this.sources.push(source);
    });

    this.source = new Source();
  }

}
