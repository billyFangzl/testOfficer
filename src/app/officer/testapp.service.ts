import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Officer} from './officer';
import { Observable } from 'rxjs';

@Injectable()
export class TestappService {

  private url = "http://localhost:45000";
  private headers = new HttpHeaders;
  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   }

  
  getOfficers(){
    return this.http
      .get(`${this.url}/Utility/SearchOfficerList?badge=&lastName=dra&firstName=`,{ headers: this.headers })
      .pipe(map(res=>res));
  }



  searchOfficer(lastname:string,firstname:string,badge:string):Observable<Officer>{
    return this.http
      .get(`${this.url}/Utility/SearchOfficerList?badge=${badge}&lastName=${lastname}&firstName=${firstname}`,{ headers: this.headers })
      .pipe(map((res:Officer)=>res));
  }
  



}
