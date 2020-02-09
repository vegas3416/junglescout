import update from 'immutability-helper';

import { AppEvents } from '../types';
import { IAction, SetActiveItem } from '../actions/actions';

export const initialState: IState = {
  activeItem: '',
  createIsOpen: false
};

export interface IState {
  activeItem: string;
  createIsOpen: boolean;
}

export const homeHub = (
  state: IState = initialState,
  action: IAction
): IState => {

  switch (action.type) {
    case AppEvents.SET_ACTIVE_ITEM:
      return update(state, {
        activeItem: { $set: action.payload }
      });
    case AppEvents.SET_CREATE_NEW_IS_OPEN:
      return update(state, {
        createIsOpen: { $set: action.payload }
      });
    default:
      return state;
  }
  
};
