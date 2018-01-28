import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { CrearPostComponent } from './crear-post/crear-post.component';
import { PostService } from './shared/post.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostComponent,
    CrearPostComponent
  ],
  exports: [
    CrearPostComponent
  ],
  providers: [PostService]
})
export class PostsModule { }
