import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:5046/students');
  }

  addNewStudent(student: Student): Observable<Student>{
    return this.http.post<Student>('http://localhost:5046/students',student);
  }

  updateStudent(id: number,student: Student): Observable<Student> {
    return this.http.put<Student>(`http://localhost:5046/students/${id}`,student);
  }

  deleteStudent(id: number): Observable<Student>{
    return this.http.delete<Student>(`http://localhost:5046/students/${id}`);
  }

}
