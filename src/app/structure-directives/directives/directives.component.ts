import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  title:string = 'Structure Directives'
  isDrive: number = 17; 
  username:string = 'Mudassir'
  loggedIn:boolean = true;


  // scnario base *ngif
 password:string = '';
 showPassword:boolean = true;

 toggle(){
  this.showPassword = !this.showPassword
 }

names:string[] = ['Mudassir', 'Hussain', 'ABC']

graded:string = 'B'



// task by Sir Shahzad

data: any[] = [
  { name: 'Mudassir', age: 24, gender: 'M' },
  { name: 'Ahmad', age: 12, gender: 'M' },
  { name: 'Ali', age: 19, gender: 'M' },
  { name: 'Mubazar', age: 23, gender: 'M' },
  { name: 'Aqib', age: 25, gender: 'M' },
  { name: 'Atif', age: 10, gender: 'M' }
];

searchAge:string = ''



}
