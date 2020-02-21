import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(
        private httpClient: HttpClient,
    ) {

    }
    login(userObj: User):Observable<any>{
        return this.httpClient.post("http://ionic-api.test/api/login", userObj)
    }

    register(userObj: User):Observable<any>{
        return this.httpClient.post("http://ionic-api.test/api/register", userObj)
    }

    getUserListFromApi(): Observable<User[]> {
        return this.httpClient.get<User[]>("http://ionic-api.test/api/list-user");
    }

    getGreeting() {
        return "Hello from the Service!";
    }
}