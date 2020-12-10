import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';
import { Post } from '../model/Post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {

  private readonly BASE_URL: string = "https://jsonplaceholder.typicode.com";


  constructor(private client: HttpClient) {
  }


  getPosts( subscriber: (value: Post[]) => void ) : Subscription {
    return this.client.get(this.BASE_URL + '/posts')
      .subscribe(
        subscriber,
        (err) => console.log(err),
        () => console.log("completed")
      );
  }

  postPost( post: Post ) {
    return this.client.post( this.BASE_URL+ '/posts', post );
  }

  putPost ( post : Post ) {
    return this.client.put( this.BASE_URL+ '/posts', post );
  }

  deletePost ( id : number) {
    return this.client.delete( this.BASE_URL + '/posts/' + id );
  }

}
