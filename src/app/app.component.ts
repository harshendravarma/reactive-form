import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import{zipcodevalidator} from '../app/validatorfile/customvalidator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  name:string="helloworld";
  form:FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      username:['',[Validators.required,Validators.minLength(4)]],
      zipcode:['',zipcodevalidator],
      email:['',[Validators.required]],
      prefix:['+91'],
      phonenumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      id:['',[Validators.required]]
    });
  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
}
}
