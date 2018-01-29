import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user/user.component';
import { UserService } from './shared/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    UserComponent,
    UserListComponent,
    DetailUserComponent
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    DetailUserComponent,
    SearchPipe
  ],
  providers: [UserService]
})
export class UsersModule { }
