import { Injectable } from '@angular/core';
import { Habit } from '../interfaces/habit';

@Injectable({
  providedIn: 'root'
})
export class HabitsService {
  habits: Habit[] = []


}
