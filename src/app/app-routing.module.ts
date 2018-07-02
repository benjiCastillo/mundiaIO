import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { TeamsComponent } from './teams/teams.component';
const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'stadiums', component: StadiumsComponent },
  { path: 'teams', component: TeamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
