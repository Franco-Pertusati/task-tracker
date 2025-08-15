import { Component, input } from '@angular/core';
import { DayBlockComponent } from "./day-block/day-block.component";

@Component({
  selector: 'app-day-overview',
  imports: [DayBlockComponent],
  templateUrl: './day-overview.component.html',
  styleUrl: './day-overview.component.css'
})
export class DayOverviewComponent {}
