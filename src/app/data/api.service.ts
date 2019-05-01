import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
const apiUrl='http://localhost:4000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  
}
