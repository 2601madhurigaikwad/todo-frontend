import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
addTask() {
throw new Error('Method not implemented.');
}
tasks: any;
constructor(private taskservice: TaskService){}
newTask: Task={description:" ",status:false};
createTask():void{
  this.taskservice.createtask(this.newTask).subscribe(()=>
  this.newTask={description:" ",status:false});
}

}
