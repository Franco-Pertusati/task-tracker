import { Component, inject, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { TasksService } from '../../../../core/services/tasks.service';
import { Task, TaskGroup } from '../../../../core/interfaces/task';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent, ButtonComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasksList: (Task)[] = []

  constructor(private tasksService: TasksService) {
    this.tasksList = tasksService.tasksAndGroups
  }
}
