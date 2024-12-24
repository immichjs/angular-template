import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { LoginUserDto } from '@models/dtos/login-user.dto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;
  private isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  public login(data: LoginUserDto) {
    return this.http.post(`${this.apiUrl}/auth/login`, data, {
      withCredentials: true,
    });
  }

  public refresh() {
    return this.http.get(`${this.apiUrl}/auth/refresh`, {
      withCredentials: true,
    });
  }

  public logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
