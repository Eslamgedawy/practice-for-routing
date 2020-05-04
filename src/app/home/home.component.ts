import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authServic: AuthService) { }

  ngOnInit() {
  }
  onEdit(id: number){
      this.router.navigate(
      ['/servers',id,'edit'],
      {
        fragment: 'loading',
        queryParams: {'allowEdit': '1'} 
      }
    )
  }

// onLogin(){
//   this.authServic.login();
// }
// onLogout(){
//   this.authServic.logout();
// }

}