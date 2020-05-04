import { Component, OnInit } from '@angular/core';
import {User} from './user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    new User(1,'eslam'),
     new User(2,'ali'),
      new User(3,'hossam')
  ]
  constructor() { }

  ngOnInit() {
  }

}