import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
title:string = 'Pipes'
today:number = Date.now()
currency:number = 2.76242452;

object={
  name:'Mudassir',
  age:24,
  gender:'M'
}
// asyncData
  // asyncData!: Observable<string>;

// ngOnInit() {
//   // Simulating an asynchronous operation that returns data after a delay
//   this.asyncData = new Observable<string>(observer => {
//     setTimeout(() => {
//       observer.next('Async data is here!');
//       // observer.complete();
//     }, 2000); // Delay of 2 seconds
//   });
// }
items: any[] = [1, 2, 3, 4, 5];

// Define the filtering criteria
filterPredicate(item: any): boolean {
  // Example: Filter even numbers
  return item % 2 === 0;
}
}
