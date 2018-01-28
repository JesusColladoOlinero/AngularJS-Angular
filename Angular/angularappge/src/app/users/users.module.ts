import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user/user.component';
import { UserService } from './shared/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { DetailUserComponent } from './detail-user/detail-user.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    UserComponent,
    UserListComponent,
    DetailUserComponent
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    DetailUserComponent
  ],
  providers: [UserService]
})
export class UsersModule { }
