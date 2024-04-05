import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { PracticeService } from '../../services/practice.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
posts:any[] = [];
userForm!:FormGroup
constructor(
  private http:HttpClient,
  private service:PracticeService,
  formBuilder:FormBuilder

  ){
this.userForm = formBuilder.group({
  Id:['', Validators.required],
  title:['', Validators.required],
  body:['', Validators.required],

})


    this.service.getAllPost().subscribe(
      (res:any)=>{
        console.log(res);
        this.posts = res;
      }
    )
        
  }

  
  deletePost(id: number) {
    this.service.deletePost(id).subscribe(
      (res:any) => {
        console.log('Post deleted successfully');
        this.refreshPosts();
      },
      error => {
        console.error('Error deleting post:', error);
      }
    );
  }
  
  refreshPosts() {
    // Call the service method to fetch the updated list of posts
    this.service.getAllPost().subscribe(
      (posts: any) => {
        this.posts = posts;
      },
      error => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  submitData(data:any){
console.log(data.value);

  }
  
}
