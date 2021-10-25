import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {

  constructor() { }
 
  columnDefs: ColDef[] = [
    { field: 'TeacherName' },
    { field: 'Branch' },
    { field: 'Subject'}
];
rowData =[
  { TeacherName:"Abc",Branch:"CSE",Subject:"BEE"},
  { TeacherName:"CDE",Branch:"EEE",Subject:"Electronics"},
  { TeacherName:"ZXY",Branch:"ECE",Subject:"WT"},
];


  ngOnInit(): void {
  }

}
