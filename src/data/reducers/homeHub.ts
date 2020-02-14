import update from 'immutability-helper';

import { AppEvents } from '../events';
import { IAction } from '../actions/actions';


export const initialState: IState = {
  activeItem: { main: '', sub: '' },
  createIsOpen: false,
  notifications: [{ type: 'Analytics' }],
  user: 'Manager'
};

export interface IState {
  activeItem: NavLocation;
  createIsOpen: boolean;
  notifications: Array<Notifications>;
  user: string;
}

interface Notifications {
  type: string;
}

export interface NavLocation {
  main: string;
  sub: string;
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
    case AppEvents.SET_USER:
      return update(state, {
        user: { $set: action.payload }
      });
    default:
      return state;
  }
};
