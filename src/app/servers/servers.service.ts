import { Injectable } from '@angular/core';
import { Server } from './server.model';

@Injectable()
export class ServersService {

  servers: Server[] = [
    new Server(1,'devserver','online'),
    new Server(2,'testserver','offline'),
    new Server(3,'productionserver','online')
  ]
  
  getServers(){
    return this.servers;
  }

  // get single servers
  getServer(id: number){
    // find sserver using id from sservers array
    const server = this.servers.find(
      // (currentServer)=> currentServer.id === id
      (currentServer) =>{
        return currentServer.id === id;
      }
    )
    return server;
  }

}