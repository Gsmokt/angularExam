import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxSnakeModule} from 'ngx-snake';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { GameplayHistoryComponent } from './components/gameplay-history/gameplay-history.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { GameScoreComponent } from './components/game-score/game-score.component';
import { ControllerComponent } from './components/controller/controller.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ScoreComponent } from './components/score/score.component';
import { HttpClientModule } from '@angular/common/http'
import { MyServiceService } from './my-service.service';
import { SortUsersPipe } from './sort-users.pipe';
import { ScorePassComponent } from './components/score-pass/score-pass.component';
import { SlicePipe } from './slice.pipe';
import { SortSliceUsersPipe } from './sort-slice-users.pipe';
import { PlayerScoreComponent } from './components/player-score/player-score.component';
import { FilterPlayerPipe } from './filter-player.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    GameplayHistoryComponent,
    FilterPipe,
    SortPipe,
    GameScoreComponent,
    ControllerComponent,
    NavigationComponent,
    ScoreComponent,
    SortUsersPipe,
    ScorePassComponent,
    SlicePipe,
    SortSliceUsersPipe,
    PlayerScoreComponent,
    FilterPlayerPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSnakeModule,
    HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
