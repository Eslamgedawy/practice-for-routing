import { Component, OnInit } from '@angular/core';
import {User} from './user.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    // subcribe to routeParams
    this.route.params.subscribe(
      (params: Params) =>{
        this.user.id = params['id'];
        this.user.name= params['name']
      }
    )
  }

}