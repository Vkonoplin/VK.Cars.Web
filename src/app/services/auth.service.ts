import { Injectable } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor(private adalService: AdalService) {

    }

    public login(): void {
        this.adalService.login();
    }

    public logout(): void {
        this.adalService.logOut();
    }
}
