import { Component, OnInit } from '@angular/core';
import { ApiConsumeService } from 'src/app/services/api-consume.service';
import { User } from 'src/app/model/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private service: ApiConsumeService) { 
  }

  ngOnInit(): void {

    this.service.subscribe((inserted) => this.users.push(inserted));

    this.service.getUsers()
      .subscribe( 
        (users) => this.users = users,
        (err) => console.error(err),
        () => console.info("get users completed") );
  }

  onReload(){
    this.service.getUsers()
      .subscribe( 
        (users) => this.users = users,
        (err) => console.error(err),
        () => console.info("get users completed") );
  }

  delete(user: User){
    this.service.deleteUser( user.id ).subscribe(
      (ok) => this.users.splice( this.users.indexOf(user), 1 ),
      (err) => console.error(err),
      () => console.info("delete user(id:" + user.id +") completed") 
    );
  }

}
