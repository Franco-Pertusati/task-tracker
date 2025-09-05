import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { DialogService } from '../../core/services/dialog.service';
import { RegisterComponent } from '../auth/pages/register/register.component';
import { LoginFormComponent } from '../auth/components/login-form/login-form.component';

@Component({
  selector: 'app-landing-page',
  imports: [ButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  dialogService = inject(DialogService);

  openRegisterDialog() {
    this.dialogService.openDialog(RegisterComponent)
  }

  openLoginDialog() {
    this.dialogService.openDialog(LoginFormComponent)
  }
}
