import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCreationComponent } from './pages/game-creation/game-creation.component';
import { GameListComponent } from './pages/game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCreationComponent,
    GameListComponent,
    
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
