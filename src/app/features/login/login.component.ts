import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginTab } from '@models/types/tabs.type';
import { bootstrapGithub, bootstrapGoogle } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroAtSymbol, heroLockClosed } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CommonModule, RouterModule, NgIcon],
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
