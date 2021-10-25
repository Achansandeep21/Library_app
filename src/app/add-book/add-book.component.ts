import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  implements OnInit {
  registerForm: any;
  data:any;
  submitted = false;

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        BookName: ['', Validators.required],
          BookAuthor: ['', Validators.required],
          Quantity: ['', Validators.required],
         // password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert(' ADDED SUCCESSFUL!!')
  }

  
}

/*

  data:any;
  constructor() { }

  ngOnInit(): void {
  }
  
  Abook(ABook:NgForm){
    if(ABook.valid ){
      this.data=ABook.value;
    }
  }
*/