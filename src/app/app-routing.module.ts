import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerFormComponent } from './components/add-player-form/add-player-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { TeamManagerComponent } from './components/team-manager/team-manager.component';

const routes: Routes = [
  { path: "info", component: TeamManagerComponent },
  { path: "form", component: AddPlayerFormComponent},
  { path: "posts", component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
