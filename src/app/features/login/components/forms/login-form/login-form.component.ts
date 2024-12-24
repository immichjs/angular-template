import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { ILoginResponse } from '@models/interfaces/login-response.interface';
import { NgIcon } from '@ng-icons/core';
import { LoadingComponent } from '@shared/components/ui/loading/loading.component';
import moment from 'moment-timezone';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, NgIcon, LoadingComponent],
  providers: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public isLoading: boolean = false;

  public login() {
    if (this.form.valid) {
      this.isLoading = true;
      this.form.disable();

      this.authService.login(this.form.value).subscribe({
        next: (response) => {
          const { accessToken } = response as ILoginResponse;
          if (response) {
            this.form.reset();
            this.router.navigate(['/']);

            const expiresIn = moment().add(60, 'minute').toDate();

            this.cookieService.set('accessToken', accessToken, expiresIn);
            this.form.enable();
            this.isLoading = false;
          }
        },
        error: ({ error }) => {
          alert(error.message);

          this.form.get('password')?.reset();
          this.form.enable();
          this.isLoading = false;
        },
      });
    }
  }
}
