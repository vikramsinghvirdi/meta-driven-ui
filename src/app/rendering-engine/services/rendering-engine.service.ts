import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class RenderingEngineService {

  constructor(private http: HttpClient) { }

  public getPageJSON(): Observable<Page> {
   return  this.http.get<Page>('./assets/json/page.json');
  }
}
