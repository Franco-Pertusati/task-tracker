import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { ThemeToggleBtnComponent } from "../../shared/ui/theme-toggle-btn/theme-toggle-btn.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, ButtonComponent, ThemeToggleBtnComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSidebarOpen: boolean = false

  sidebarBtns = [
    {
      label: 'Habits',
      icon: 'favorite',
    },
    {
      label: 'Notes',
      icon: 'stylus_note',
    },
    {
      label: 'Account',
      icon: 'person',
    },
  ];
}
