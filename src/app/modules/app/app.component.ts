import { Component } from '@angular/core';
import { DaysListComponent } from './components/days-list/days-list.component';
import { DayOverviewComponent } from './components/day-overview/day-overview.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TaskListComponent } from './components/task-list/task-list.component';


@Component({
  selector: 'app-root',
  imports: [DaysListComponent, TaskListComponent, DayOverviewComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
