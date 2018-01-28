import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  user: User;

  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.router.snapshot.paramMap.get('id');

    this.userService.getUser(id)
      .subscribe((usr) => {
        this.user = usr.data;
        console.log(this.user);
      }, err => console.error(err));
  }
}
