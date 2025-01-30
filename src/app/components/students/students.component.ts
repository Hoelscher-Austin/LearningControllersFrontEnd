import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../models/students';
import { StudentsService } from '../../services/students.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  imports: [ReactiveFormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  
  //studentService: StudentsService = inject(StudentsService);
  studentList: Student[] = [];

  constructor(private studentService: StudentsService){}

  //Reactive Forms
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    age: new FormControl(""),
    year: new FormControl("")
  })

  ngOnInit(): void {
    this.getAllStudents();
  }


  getAllStudents() {
    this.studentService.getAllStudents().subscribe((data: Student[]) => {
      this.studentList = data;
      console.log(`Recieved student list: ${data}`)
    });
  }

  submitStudent(){
    
  }


}
