import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { HabitsListComponent } from "./pages/habits-list/habits-list.component";
import { TrackerComponent } from "./pages/tracker/tracker.component";
import { HabitsComponent } from "./pages/habits/habits.component";
import { NotesComponent } from "./pages/notes/notes.component";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'habits',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'habits'
      },
      {
        path: 'habits',
        component: HabitsComponent
      },
      {
        path: 'notes',
        component: NotesComponent
      },
    ]
  }
];
