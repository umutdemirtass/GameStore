import { Action, createAction, props } from "@ngrx/store";
import { Game } from "../game"

export const addGame = createAction(
  //state ekleme icin action olusturuldu
  '[Game List] Add Game',
  props<{ game: any }>()
);

export const deleteGame = createAction(
  //state delete icin action olusturuldu
  '[Game List] Delete Game',
  props<{ game: any }>()
);