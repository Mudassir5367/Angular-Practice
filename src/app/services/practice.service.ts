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


  getAllPost(){
    return this.http.get('http://localhost:5002/getAllPosts')
  }

deletePost(id:number){
return this.http.delete(`http://localhost:5002/deletePost/${id}`)
}

updatePost(id:number){
  return this.http.put(`http://localhost:5002/updatePost/${id}`, id)
  }

}
