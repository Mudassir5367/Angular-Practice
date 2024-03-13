import { Component } from '@angular/core';
import { PracticeService } from './services/practice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-practice';
  arr:string[] = []
  getPostData:any = []
  constructor(private service:PracticeService){
    this.arr = service.getData()
    // console.log(this.arr);

    // getPosts
    this.service.getPosts().subscribe(
      (res:any)=>{
        this.getPostData = res
        // console.log(this.getPostData);
        
      }
    );
      
    
    
  }
}
