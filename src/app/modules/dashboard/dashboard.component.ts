import { Component } from '@angular/core';
import { DaysOfTheWeekComponent } from "./sections/days-of-the-week/days-of-the-week.component";
import { TasksListsComponent } from "./sections/tasks-lists/tasks-lists.component";

@Component({
  selector: 'app-dashboard',
  imports: [DaysOfTheWeekComponent, TasksListsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSidebarOpen: boolean = false

  sidebarBtns = [
    {
      label: 'Links',
      icon: 'link',
    },
    {
      label: 'Analytics',
      icon: 'insights',
    },
    {
      label: 'Reports',
      icon: 'bar_chart',
    },
    {
      label: 'Cutomers',
      icon: 'group',
    },
    {
      label: 'Settings',
      icon: 'settings',
    },
    {
      label: 'Tags',
      icon: 'sell',
    },
    {
      label: 'Events',
      icon: 'calendar_today',
    },
    {
      label: 'Support',
      icon: 'support_agent',
    }
  ];
}
