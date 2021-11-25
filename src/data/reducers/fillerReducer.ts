import update from 'immutability-helper';
import { AppEvents } from '../events';
import { IAction } from '../actions/actions';

export const initialState: IState = {
  filler: ''
};
export interface IState {
  filler: string;
}

export const fillerReducer = (
  state: IState = initialState,
  action: IAction
): IState => {
  switch (action.type) {
    case AppEvents.SET_FILLER:
      return update(state, {
        filler: { $set: action.payload }
      });
    default:
      return state;
  }
};
