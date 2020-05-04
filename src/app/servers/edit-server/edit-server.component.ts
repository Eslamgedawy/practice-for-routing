import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Server } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  allowEdit = false;
  serverName = '';
  serverStatus = '';
  server: Server;

  constructor(private route: ActivatedRoute,
              private serverService: ServersService) { }

  ngOnInit() {
    // subscripe to queryParams from servers here 
    this.route.queryParams.subscribe(
      (qparam: Params) =>{
        this.allowEdit =  qparam['allowEdit'] === '1'? true: false ;
      }
    )

    // get current serverName,serverStatus using serverService
    const id = +this.route.snapshot.params['id'];
    this.server =  this.serverService.getServer(id);
    this.serverName = this.server.serverName;
    this.serverStatus = this.server.serverStatus;
  }

}