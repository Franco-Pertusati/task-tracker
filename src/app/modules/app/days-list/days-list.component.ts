import { Component } from '@angular/core';

@Component({
  selector: 'app-days-list',
  imports: [],
  templateUrl: './days-list.component.html',
  styleUrl: './days-list.component.css'
})
export class DaysListComponent {
  weekDays = [
    { day: 'Mon', num: 14 },
    { day: 'Tue', num: 15 },
    { day: 'Wed', num: 16 },
    { day: 'Thu', num: 17 },
    { day: 'Fri', num: 18 },
    { day: 'Sat', num: 19 },
    { day: 'Sun', num: 20 }
  ];
}
