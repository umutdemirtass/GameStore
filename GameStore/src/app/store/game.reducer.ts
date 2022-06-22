import { createReducer, on } from '@ngrx/store';
import { Game } from "../game"
import { addGame, deleteGame } from './game.action';

export const initialState: Game[] =[];

export const gameReducer = createReducer(
  // actiondan gelen fonksiyonun state icine atilmasi ve silinmesi icin geren reducer yazildi
  initialState,
  on(addGame, (state, { game }) => ([...state, game])),
  on(deleteGame, (state, { game }) => {
    let gameIndex = state.findIndex(st => st.id == game.id); // id bilgisine gore state icinden silme yapiyor
    let newState = [...state];
    newState.splice(gameIndex, 1);
    return newState
  })
);