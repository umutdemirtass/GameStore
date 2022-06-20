import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCreationComponent } from './pages/game-creation/game-creation.component';
import { GameListComponent } from './pages/game-list/game-list.component';

const routes: Routes = [
  {
    path:'',
    component:GameListComponent
  },
  {
    path:'game-create',
    component:GameCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
