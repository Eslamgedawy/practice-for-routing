import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ServersService } from './servers/servers.service';
import { AppRoutingModule } from './app-routing.module';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { AuthService } from './auth.service';
import { AuthServiceGuard } from './auth-service.guard';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ServersComponent, UsersComponent, ServerComponent, EditServerComponent, UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServersService, AuthService,AuthServiceGuard]
})
export class AppModule { }
