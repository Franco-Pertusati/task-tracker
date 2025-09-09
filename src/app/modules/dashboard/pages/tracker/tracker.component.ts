import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/ui/button/button.component";

interface ContributionDay {
  date: Date;
  level: number;
}

@Component({
  selector: 'app-tracker',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {
  weeks: ContributionDay[][] = [];

  ngOnInit() {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1);
    this.weeks = this.generateWeeks(startDate, endDate);
  }

  private generateWeeks(start: Date, end: Date): ContributionDay[][] {
    const weeks: ContributionDay[][] = [];
    let current = new Date(start);

    while (current.getDay() !== 0) {
      current.setDate(current.getDate() - 1);
    }

    while (current <= end) {
      const week: ContributionDay[] = [];
      for (let i = 0; i < 7; i++) {
        if (current < start || current > end) {
          week.push({ date: new Date(current), level: -1 });
        } else {
          week.push({ date: new Date(current), level: this.getLevelForDate(current) });
        }
        current.setDate(current.getDate() + 1);
      }
      weeks.push(week);
    }
    return weeks;
  }

  private getLevelForDate(date: Date): number {
    return Math.floor(Math.random() * 5);
  }
}
