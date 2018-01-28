import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {

        this.post = <Post>params;
        //console.log(this.post);
      });
  }

}
