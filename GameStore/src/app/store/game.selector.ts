import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Game } from '../game';

// sayfalarda kullanabilmemiz icin selector olusturuldu
export const gameSelector = createFeatureSelector<Game[]>('game');