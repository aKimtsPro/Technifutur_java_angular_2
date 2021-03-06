import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamManagerComponent } from './components/team-manager/team-manager.component';
import { AddPlayerFormComponent } from './components/add-player-form/add-player-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerInfoComponent } from './components/team-manager/player-info/player-info.component';
import { NavComponent } from './components/nav/nav.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DemoObsComponent } from './components/demo-obs/demo-obs.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamManagerComponent,
    AddPlayerFormComponent,
    PlayerInfoComponent,
    NavComponent,
    PostsComponent,
    UserComponent,
    UserFormComponent,
    DemoObsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
