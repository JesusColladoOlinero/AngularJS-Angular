import { Component, OnInit, keyframes } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  usersAux: User[];
  term: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.userService.getUsers()
      .subscribe(user => {
        this.users = user.data;
        this.usersAux = user.data;
      }, err => console.error(err));
  }

  onClick(id: number): void {
    this.router.navigateByUrl(`users/${id}`);
  }

  SearchUsers(keys: string, query: string): void {
    this.users = this.usersAux;

    const values = (this.users || [])
      .filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(query, 'gi').test(item[key])));

    console.log(values);

    this.users = values;
 }
}
