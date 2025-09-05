import { Component } from '@angular/core';
import { WeekDayComponent } from "./components/week-day/week-day.component";
import { Day } from '../../../../core/interfaces/day';

@Component({
  selector: 'app-days-of-the-week',
  imports: [WeekDayComponent],
  templateUrl: './days-of-the-week.component.html',
  styleUrl: './days-of-the-week.component.css'
})
export class DaysOfTheWeekComponent {
  weekDays: Day[] = [
    { number: 12, name: 'Monday', abbreviation: 'Mon' },
    { number: 13, name: 'Tuesday', abbreviation: 'Tue' },
    { number: 14, name: 'Wednesday', abbreviation: 'Wed' },
    { number: 15, name: 'Thursday', abbreviation: 'Thu' },
    { number: 16, name: 'Friday', abbreviation: 'Fri' },
    { number: 17, name: 'Saturday', abbreviation: 'Sat' },
    { number: 18, name: 'Sunday', abbreviation: 'Sun' }
  ];
}
