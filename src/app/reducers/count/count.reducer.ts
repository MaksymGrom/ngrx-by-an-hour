import { CountActions, countActionsType } from './count.actions';

export const countNode = 'count';

export interface CountState {
  count: number;
  updatedAt: number;
}

const initialState: CountState = {
  count: 0,
  updatedAt: Date.now()
};

export const countReducer = (state = initialState, action: CountActions) => {
  switch (action.type) {
    case countActionsType.increase:
      return {
        ...state,
        count: state.count + 1
      };
    case countActionsType.decrease:
      return {
        ...state,
        count: state.count - 1
      };
    case countActionsType.clear:
      return {
        ...state,
        count: 0
      };
    case countActionsType.updatedAt:
      return {
        ...state,
        updatedAt: action.payload.updatedAt
      };
    default:
      return state;
  }
}
