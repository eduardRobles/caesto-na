
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SingInComponent } from './components/sing-in/sing-in.component'
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CardOverviewComponent } from './components/card-overview/card-overview.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { TroopListComponent } from './components/card-list/troop-list/troop-list.component';
import { CommanderListComponent } from './components/card-list/commander-list/commander-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { TroopDetailComponent } from './components/card-detail/troop-detail/troop-detail.component';
import { CommanderDetailComponent } from './components/card-detail/commander-detail/commander-detail.component';
import { DeckDetailComponent } from './components/deck-detail/deck-detail.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { DeckOverviewComponent } from './components/deck-overview/deck-overview.component';
import { SearchTroopComponent } from './components/search/search-troop/search-troop.component';
import { SearchCommanderComponent } from './components/search/search-commander/search-commander.component';
import { SearchDeckComponent } from './components/search/search-deck/search-deck.component';
import { GameComponent } from './components/game/game.component';
import { GameUsersComponent } from './components/game/game-users/game-users.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//SERVICES
import  {CurrentUserService} from './shared/current-user.service';
import { AuthenticationService } from './shared/authentication/authentication.service';
import { UserService } from './shared/user.service';
import { CardsService } from './shared/cards.service';
import { RacesService } from './shared/races.service';
import { CommanderService } from './shared/commander.service';
import { TroopService } from './shared/troop.service';
import { DecksService } from './shared/decks.service';
import { TypesService } from './shared/types.service';
import { GameService } from './shared/game.service';
import {AuthGuard,AdminGuard} from './shared/authentication/guard'
//PIPES
import {CommanderFilterPipe} from './shared/pipes/commanderFilter'
import {TroopFilterPipe} from './shared/pipes/troopFilter'
import {DeckFilterPipe} from './shared/pipes/deckFilter'
import {TruncatePipe} from './shared/pipes/truncateFilter'
import {ArraySortPipe} from './shared/pipes/sort'

//ROUTING
import { RouterModule, Routes } from '@angular/router';
import { routing } from './routes/routing';

//SOCKET.IO
//import {socketConfig} from './socket/config'

//MOCKS
import { fakeBackendProvider } from './mocks/mocks';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    LoginComponent,
    RegisterComponent,
    SingInComponent,
    CardListComponent,
    CardDetailComponent,
    CardOverviewComponent,
    CommanderDetailComponent,
    TroopDetailComponent,
    CommanderListComponent,
    TroopListComponent,
    CommanderFilterPipe,
    TroopFilterPipe,
    DeckFilterPipe,
    TruncatePipe,
    ArraySortPipe,
    DeckDetailComponent,
    DeckOverviewComponent,
    DeckListComponent,
    SearchTroopComponent,
    SearchCommanderComponent,
    SearchDeckComponent,
    GameComponent,
    GameUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

  ]
  ,
  providers: [
    CurrentUserService,
    AuthenticationService,
    UserService,
    CardsService,
    RacesService,
    CommanderService,
    TroopService,
    DecksService,
    TypesService,
    GameService,
    //fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
