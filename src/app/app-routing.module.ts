import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerFormComponent } from './components/add-player-form/add-player-form.component';
import { DemoObsComponent } from './components/demo-obs/demo-obs.component';
import { PostsComponent } from './components/posts/posts.component';
import { TeamManagerComponent } from './components/team-manager/team-manager.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: "info", component: TeamManagerComponent },
  { path: "form", component: AddPlayerFormComponent},
  { path: "posts", component: PostsComponent},
  { path: "user", component: UserComponent},
  { path: "u_form", component: UserFormComponent},
  { path: "obs", component: DemoObsComponent},
  { path: "", redirectTo: "/user", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
