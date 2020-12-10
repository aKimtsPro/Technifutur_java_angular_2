import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';
import { Post } from '../model/Post.model';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {

  private readonly BASE_URL: string = "https://jsonplaceholder.typicode.com";
  private userInsertedEvent = new EventEmitter<User>();

  constructor(private client: HttpClient) {
  }

  // event

  subscribe(subscriber: (user: User) => void ){
    this.userInsertedEvent.subscribe( subscriber );
  }

  // Posts

  getPosts( subscriber: (tabPost: Post[]) => void ) : Subscription {
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

  // Users

  getUsers() : Observable<User[]>{
    return <Observable<User[]>> this.client.get(this.BASE_URL + "/users");
  }

  deleteUser(id : number){
    return this.client.delete(this.BASE_URL + '/users/' + id);
  }

  postUser(user: User) : Observable<User> {
    let obsPost = <Observable<User>> this.client.post(this.BASE_URL + "/users", user);
    obsPost.subscribe((inserted) => this.userInsertedEvent.emit(inserted))
    return obsPost;
  }

}
