import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../shared/post.service';
import { filterQueryId } from '@angular/core/src/view/util';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent implements OnInit {
  postForm: FormGroup;
  idUsers = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private postService: PostService
  ) {
    this.postForm = fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.postForm.valid){
      this.postService.postPost(this.postForm.value)
        .subscribe(post => {
          console.log(post);
          this.router.navigateByUrl(`posts/${post.id}`);
        });
    }
  }
}
