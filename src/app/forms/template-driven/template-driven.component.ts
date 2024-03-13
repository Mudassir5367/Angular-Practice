import { Component } from '@angular/core';
import { TemplateForm } from '../../interfaces/templateForm.interface';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
  form: TemplateForm = {
    name: '',
    email: ''
  };

  submitData(data:NgForm) {
    if (data.valid) {
      console.log(data.value);
    }
    
  }

  
  emailValidate() {
    let emailRegex = new RegExp('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}');
    return emailRegex.test(this.form.email);
}
nameValidate() {
  let nameRegex = /^[A-Za-z]+$/;
  return nameRegex.test(this.form.name);
}



}
