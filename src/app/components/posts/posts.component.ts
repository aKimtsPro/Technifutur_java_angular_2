import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post.model';
import { ApiConsumeService } from 'src/app/services/api-consume.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [{id:1, userId:1, title: "titre", body: "contenu"}];

  constructor(private service: ApiConsumeService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.service.getPosts((emission) => this.posts = emission);
  }

}
