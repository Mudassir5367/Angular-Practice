import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  objct:any;

  data: any[] = ['Mudassir', 12, 'Hussain']; 

  deleteItem(){
    console.log('parent child relation');
    
  }

  receiveObject(obj: any) {
    console.log('Object received from child:', obj);
    // Handle the received object here
  }
}
