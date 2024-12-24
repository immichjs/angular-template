import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LoginTab } from '@models/types/tabs.type';
import { bootstrapGithub, bootstrapGoogle } from '@ng-icons/bootstrap-icons';
import { provideIcons } from '@ng-icons/core';
import { heroAtSymbol, heroLockClosed } from '@ng-icons/heroicons/outline';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [NgClass, LoginFormComponent],
  viewProviders: [
    provideIcons({
      heroAtSymbol,
      heroLockClosed,
      bootstrapGoogle,
      bootstrapGithub,
    }),
  ],
})
export class LoginComponent {
  public activeTab: LoginTab = 'signin';

  public changeTab(tab: LoginTab) {
    this.activeTab = tab;
  }
}
