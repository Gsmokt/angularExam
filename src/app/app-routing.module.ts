import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './components/game-page/game-page.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { PlayerScoreComponent } from './components/player-score/player-score.component';
import { ScorePassComponent } from './components/score-pass/score-pass.component';
import {ScoreComponent} from './components/score/score.component';
import { PlayerDataGuardGuard } from './player-data-guard.guard';

const routes: Routes = [
  {path:'', component: IntroPageComponent},
  {path:'game/:color', component: GamePageComponent, canActivate:[PlayerDataGuardGuard]},
  {path:'scores', component: ScoreComponent},
  {path:'playerscores', component: PlayerScoreComponent},
  {path: 'scores-pass', component: ScorePassComponent},
  {path: '**', component: IntroPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
