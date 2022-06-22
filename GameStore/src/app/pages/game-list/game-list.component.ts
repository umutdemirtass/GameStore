import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';
import { Game } from 'src/app/game';
import { deleteGame } from 'src/app/store/game.action';
import { gameSelector } from 'src/app/store/game.selector';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  show: boolean = false

  games$ = this.store.select(gameSelector);
  searchControl = new FormControl();

  // search kontrol icin combineLatest kullandim. iki observable kontorlu icin
  filteredGames$ = combineLatest([this.games$, this.searchControl.valueChanges]).pipe(
    map(([gameArr, filterValue]) => {
      if (filterValue)
        return gameArr.filter((e: Game) => e.gameName.startsWith(filterValue));
      else
        return gameArr;
    })
  )

  filteredGames: Game[] = [];

  constructor(
    private store: Store
  ) { }


  deleteGame(game: any) {
    let confirmAlert = confirm('Are you sure you want to delete the game?');
    if (confirmAlert) this.store.dispatch(deleteGame({ game }))
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchControl.setValue('')
    }, 100);
  }

}
