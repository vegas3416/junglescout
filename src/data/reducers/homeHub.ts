import update from 'immutability-helper';
import * as TYPES from '../types';

const getInitialState = () => ({
  activeItem: ''
});

export default (
  state = getInitialState(),
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case TYPES.SET_ACTIVE_ITEM:
      return update(state, {
        activeItem: { $set: action.payload }
      });

    default:
      return { ...state };
  }
};
