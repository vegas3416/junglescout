import update from 'immutability-helper';

import { AppEvents } from '../events';
import { IAction } from '../actions/actions';
import App from '../../App';


export const initialState: IState = {
  activeItem: { main: 'Home', sub: '' },
  createIsOpen: false,
  notifications: [{ type: 'Analytics', user: 'Manager' }, { type: 'Jobs', user: 'Recruiter' }],
  user: 'Manager',
  resumeMessageSent: false,
  createTemplate: false,
  mobileViews: false

};

export interface IState {
  activeItem: NavLocation;
  createIsOpen: boolean;
  notifications: Array<Notifications>;
  user: string;
  mobileViews: boolean;


  //This is just set for testing prototype
  resumeMessageSent: boolean;
  createTemplate: boolean;
}

interface Notifications {
  type: string;
  user: string;
}

export interface NavLocation {
  main: string;
  sub?: string;
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
        notifications: { $set: state.notifications.filter(item => item.type !== action.payload) }
      });
    case AppEvents.RESET_NOTIFICATION:
      return update(state, {
        notifications: { $push: action.payload }
      });
    case AppEvents.SET_USER:
      return update(state, {
        user: { $set: action.payload }
      });
    case AppEvents.SET_RESUME_MESSAGE_SENT:
      return update(state, {
        resumeMessageSent: { $set: action.payload }
      });
    case AppEvents.SET_CREATE_TEMPLATE:
      return update(state, {
        createTemplate: { $set: action.payload }
      });
    case AppEvents.SET_MOBILE_VIEW:
      return update(state, {
        mobileViews: { $set: action.payload }
      });

    default:
      return state;
  }
};
