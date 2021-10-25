import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor() { }

  columnDefs: ColDef[] = [
    { field: 'BookName' },
    { field: 'Author' },
    { field: 'Subject'}
];
rowData =[
  { BookName:"Abc",Author:"CSE",Subject:"BEE"},
  { BookName:"CDE",Author:"EEE",Subject:"Electronics"},
  { BookName:"ZXY",Author:"ECE",Subject:"WT"},
];


  ngOnInit(): void {
  }

}
