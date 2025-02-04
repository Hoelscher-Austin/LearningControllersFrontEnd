import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../models/students';
import { StudentsService } from '../../services/students.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  imports: [ReactiveFormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  
  //studentService: StudentsService = inject(StudentsService);
  studentList: Student[] = [];
  overlay: boolean = false;
  overlayId: number = 0;

  constructor(private studentService: StudentsService){}

  //Reactive Forms
  studentForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    year: new FormControl("", Validators.required)
  })

  ngOnInit(): void {
    this.getAllStudents();
  }

  // HTTP Requests
  getAllStudents() {
    this.studentService.getAllStudents().subscribe((data: Student[]) => {
      this.studentList = data;
      console.log(`Recieved student list: ${data}`)
    });
  }

  submitStudent() {
    this.studentService.addNewStudent(this.studentForm.value).subscribe({
      next: (data: Student) => {
        alert(`Student added successfully!`);
        this.getAllStudents();
      },
      error: (err) => {
        alert(`There was an error when adding student: ${err}`);
        console.error(`Error adding student:`, err);
      }
    });
  }

  deleteStudent(id: number){
    const prompt = confirm("Are you sure you want to delete this student?");
    if(prompt){
      this.studentService.deleteStudent(id).subscribe({
        next: (data: Student) => {
          alert("Student Deleted Successfully.");
          this.getAllStudents();
        },
        error: (err) => {
          alert("There was an error when deleting student.");
          console.error("Error Deleting Student: ", err);
        }
      });
    }
  }

  updateStudent(id: number){
    this.studentService.updateStudent(id,this.studentForm.value).subscribe({
      next: () => {
        alert("Student Updated Successfully!");
        this.getAllStudents();
        this.closeOverlay();
      },
      error: (err) => {
        alert("Error When Updating Student");
        console.error("Error Updating Student: ", err);
      }
    })
  }


  // Form Overlay for POST Requests
  showOverlay(student: Student){
    this.overlay = true;
    this.studentForm.patchValue(student);
    this.overlayId = student.studentId;
  }

  closeOverlay(){
    this.overlay = false;
    this.studentForm.reset();
  }

}
