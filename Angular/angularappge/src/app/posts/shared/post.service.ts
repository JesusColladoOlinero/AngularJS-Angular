import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post.model';
import { CreatePost } from './create-post.model';

@Injectable()
export class PostService {
  // private postUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient ) { }

  // En vez de hacer un any hay que hacer una clase PostCreate sin el id y reemplazarlo
  postPost(post: CreatePost): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post);
  }
}
