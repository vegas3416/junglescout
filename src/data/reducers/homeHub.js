import update from 'immutability-helper';
import * as TYPES from 'Src/actions/types';

const getInitialState = () => ({
  activeItem: ''
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case TYPES.SET_ACTIVE_ITEM:
      return update(state, {
        activeItem: {
          $set: action.payload
        }
      });

    default:
      return { ...state };
  }
};
