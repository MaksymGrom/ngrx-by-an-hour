import { Action } from '@ngrx/store';

export enum countActionsType {
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clear = '[COUNT] clear',
  updatedAt = '[COUNT] updated at',
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase;
}

export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decrease;
}

export class CountClearAction implements Action {
  readonly type = countActionsType.clear;
}

export class CountUpdatedAtAction implements Action {
  readonly type = countActionsType.updatedAt;

  constructor(public payload: {
    updatedAt: number;
  }) {
  }
}

export type CountActions = CountIncreaseAction
  | CountDecreaseAction
  | CountClearAction
  | CountUpdatedAtAction;
