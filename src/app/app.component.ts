import { Component } from '@angular/core';
import { DaysListComponent } from "./modules/app/days-list/days-list.component";
import { TaskListComponent } from "./modules/app/task-list/task-list.component";
import { DayOverviewComponent } from "./modules/app/day-overview/day-overview.component";

@Component({
  selector: 'app-root',
  imports: [DaysListComponent, TaskListComponent, DayOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
