import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCreationComponent } from './pages/apps/game-creation/game-creation.component';
import { GameListComponent } from './pages/apps/game-list/game-list.component';
import { AppsComponent } from './pages/apps/apps.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCreationComponent,
    GameListComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
