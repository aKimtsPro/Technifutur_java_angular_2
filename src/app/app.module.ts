import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamManagerComponent } from './components/team-manager/team-manager.component';
import { AddPlayerFormComponent } from './components/team-manager/add-player-form/add-player-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerInfoComponent } from './components/team-manager/player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamManagerComponent,
    AddPlayerFormComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
