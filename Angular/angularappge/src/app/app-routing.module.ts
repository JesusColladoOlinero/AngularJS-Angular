import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { CrearPostComponent } from './posts/crear-post/crear-post.component';
import { PostComponent } from './posts/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: DetailUserComponent },
  { path: 'create/post', component: CrearPostComponent }
  { path: 'posts/:id', component: PostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
