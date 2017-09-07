import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayersComponent } from './components/players/players.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { NavComponent } from './components/nav/nav.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { LoginComponent } from './components/login/login.component';
import { HousesComponent } from './components/houses/houses.component';

const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayersComponent,
    AddPlayerComponent,
    PlayerDetailsComponent,
    NavComponent,
    LeaderboardComponent,
    LoginComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
