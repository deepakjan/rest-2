import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { endpoints } from './endpoint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpcallsService {

  constructor(private http:HttpClient) { }

  httpgetcall():Observable<any>{
    return this.http.get<any>(`${endpoints.posts}`)
  }
}
