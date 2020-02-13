import update from 'immutability-helper';

import { AppEvents } from '../events';
import { IAction, SetActiveItem } from '../actions/actions';
import { $CombinedState } from 'redux';
import { IAppState } from '../store';
import { ActionType } from 'redux-promise-middleware';

export const initialState: IState = {
  activeItem: '',
  createIsOpen: false,
  notifications: [{ type: 'Analytics' }]
};

export interface IState {
  activeItem: string;
  createIsOpen: boolean;
  notifications: Array<Notifications>;
}

interface Notifications {
  type: string;
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
    case AppEvents.CHECK_NOTIFICATIONS:
      return update(state, {
        notifications: { $set: state.notifications.filter(item => item.type != action.payload) }
      });
    default:
      return state;
  }
};
