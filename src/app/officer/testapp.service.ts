import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Officer} from './officer';
import { Observable } from 'rxjs';

@Injectable()
export class TestappService {

  private url = "http://localhost:4000";


  constructor(private http:HttpClient) { }

  
  getOfficers(){
    return this.http
      .get(`${this.url}/officers`)
      .pipe(map(res=>res));
  }

  searchOfficer(officer:string):Observable<Officer>{
    return this.http
      .get(`${this.url}/officers`)
      .pipe(map((res:Officer)=>res));
  }
  



}
