import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Data } from './user.model';
import { User } from './user.model';

@Injectable()
export class UserService {
  // private userUrl = 'https://jsonplaceholder.typicode.com/users';
  private userUrl = 'https://reqres.in/api/users?page=2';

  constructor(private http: HttpClient) {  }

  getUsers(): Observable<Data> {
    // this.http
    // .get<Data>(this.userUrl)
    // .subscribe(res => console.log(res.data));

    return this.http.get<Data>(this.userUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);

    // `` es para concatenar en TypeScript
  }
}
