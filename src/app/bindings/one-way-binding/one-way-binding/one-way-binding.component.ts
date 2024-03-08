import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.scss'
})
export class OneWayBindingComponent {

  // after binding
  fname = 'Mudassir'
  img:string = '../assets/candle.jpg'

  // style binding
  clr:string= 'red';
  bgColor:string = 'backgroundColor: indigo; color:gold; padding:10px; fontSize:20px'

  // class binding
  // clsBinding:boolean = true
  clsBinding:string = 'yes';


}
