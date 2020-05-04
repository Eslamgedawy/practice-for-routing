import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  allowEdit = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // subscripe to queryParams from servers here 
    this.route.queryParams.subscribe(
      (qparam: Params) =>{
        this.allowEdit =  qparam['allowEdit'] === '1'? true: false ;
      }
    )
  }

}