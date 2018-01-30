import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';
import { SearchPipe } from '../../search.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
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
      .subscribe(user => this.users = user.data, err => console.error(err));
  }

  onClick(id: number): void {
    this.router.navigateByUrl(`users/${id}`);
  }
}
