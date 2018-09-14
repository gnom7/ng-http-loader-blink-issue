import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {Spinkit} from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-http-loader-blink-issue';

  spinlit = Spinkit;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.get().pipe(delay(1)).subscribe(() => this.get().subscribe());
  }

  private get(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:3000');
  }

}
