import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  data:any;
    constructor() { }
  
    ngOnInit(): void {
    }
    
    StudentPage(Student:NgForm){
      if(Student.valid){
        this.data=Student.value;
      }
    }
}
