import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@alpha-centurion-project/api-interfaces';

@Component({
  selector: 'alpha-centurion-project',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
