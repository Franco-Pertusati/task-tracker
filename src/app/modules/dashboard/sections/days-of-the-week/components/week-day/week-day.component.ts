import { Component, input } from '@angular/core';
import { Day } from '../../../../../../core/interfaces/day';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-week-day',
  imports: [NgClass],
  templateUrl: './week-day.component.html',
  styleUrl: './week-day.component.css'
})
export class WeekDayComponent {
  day = input.required<Day>()
  isActive = input.required<boolean>()
}
