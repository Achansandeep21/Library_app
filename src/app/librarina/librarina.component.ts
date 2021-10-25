import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-librarina',
  templateUrl: './librarina.component.html',
  styleUrls: ['./librarina.component.css']
})
export class LibrarinaComponent implements OnInit {
  data:any;
    constructor() { }
  
    ngOnInit(): void {
    }
    
    LibraranSite(libraran:NgForm){
      if(libraran.valid){
        this.data=libraran.value;
      }
    }

}
