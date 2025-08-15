import { Component, input } from '@angular/core';
import { Task } from '../../../../../core/interfaces/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>()
  type = input.required<boolean>()

  msToWholeMinutes(ms: number) {
    return `${Math.floor(ms / 60000)} mins`;
  }
}
