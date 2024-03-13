import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private http:HttpClient) { }
  getData(){
    return ['Mudassir','Hussain']
  }

url:string = 'https://jsonplaceholder.typicode.com/users'
  getPosts(){
    return this.http.get(this.url)
  }
}
