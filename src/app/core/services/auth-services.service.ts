import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private _Http: HttpClient, private _Cookie: CookieService) {}

    get(): Observable<User> {
        return this._Http.get<User>('http://localhost:8000/api/user', {
            headers: {
                Authorization:
                    'Bearer ' + JSON.parse(this._Cookie.get('user')).data.token,
            },
        });
    }

    login(body: any): Observable<User> {
        return this._Http.post<User>(
            'http://localhost:8000/api/auth/login',
            body
        );
    }

    register(body: any): Observable<User> {
        return this._Http.post<User>(
            'http://localhost:8000/api/auth/register',
            body
        );
    }

    google(body: any): Observable<User> {
        return this._Http.post<User>(
            'http://localhost:8000/api/auth/google',
            body
        );
    }
}
