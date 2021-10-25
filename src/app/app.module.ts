import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule,  } from '@angular/platform-browser';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LibrarinaComponent } from './librarina/librarina.component';
import { StudentComponent } from './student/student.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { AddBookComponent } from './add-book/add-book.component';

import { FormsModule } from '@angular/forms';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { DeleteTeacherComponent } from './delete-teacher/delete-teacher.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { DemoComponent } from './demo/demo.component';
import {HttpClientModule} from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LibrarinaComponent,
    StudentComponent,
    RemoveBookComponent,
    AddBookComponent,
    
    MaintenanceComponent,
    DeleteTeacherComponent,
    CreateTeacherComponent,
    ViewTeacherComponent,
    DemoComponent,
    ViewBookComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'student', component: StudentComponent },
      { path: 'librarina', component: LibrarinaComponent },
      { path: 'Removebook', component: RemoveBookComponent },
      { path: 'Addbook', component: AddBookComponent },
      { path: 'Maintain', component: MaintenanceComponent },
      { path: 'AddTeacher', component: CreateTeacherComponent },
      { path: 'RemoveTeacher', component: DeleteTeacherComponent },
      { path: 'ViewTeacher', component: ViewTeacherComponent },
      { path: 'viewBook', component:ViewBookComponent },
      { path: 'Demo', component: DemoComponent },
      
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]

})
export class AppModule { }
