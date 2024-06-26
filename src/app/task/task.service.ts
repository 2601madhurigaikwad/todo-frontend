import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiurl="http://localhost:8080/api/tasks";
  constructor(private httpclient:HttpClient) { }

  createtask(newTask: Task):Observable<Task>{
          return this.httpclient.post<Task>(this.apiurl, newTask);
  }
}
