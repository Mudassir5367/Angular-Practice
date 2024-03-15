import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() dataToChild! : any[];
  @Output() dataToParent = new EventEmitter<void>()
  @Output() objectToParent = new EventEmitter<any>();

  onDeleteClick(data:any){
    this.dataToParent.emit();    
    const currentDate = new Date().getTime();
    this.dataToChild = this.dataToChild.filter(item => item !== data)   
    
  }

  addData(data:any){
    // data = new Date().getTime();
    this.dataToChild.push(data); 
   
  }

  sendObject() {
    const obj:any = {
      name: 'Mudassir',
      age: 24,
      city: 'Lahore'
    };
    this.objectToParent.emit(obj);
  }
  

}
