import { Injectable } from '@angular/core';
import { Task, TaskGroup } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksAndGroups: Task[] = [
    {
      id: 1,
      title: "Leer 30 minutos",
      transcurredTime: 1800,
      isPlaying: false,
      completed: true,
      tag: {
        id: 1,
        name: "Lectura",
        objective: 3600,
      },
      repeat: true,
      repeated: 3,
    },
    {
      id: 2,
      title: "Hacer ejercicio",
      transcurredTime: 1200,
      isPlaying: true,
      completed: false,
      tag: {
        id: 2,
        name: "Salud",
      },
    },
  ];

}
