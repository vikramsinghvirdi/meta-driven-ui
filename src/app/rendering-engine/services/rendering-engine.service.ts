import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RenderingEngineService {

  constructor(private http: HttpClient) { }

  public getPageJSON(): Observable<any> {
   return  this.http.get('./assets/json/page.json');
  }
}
