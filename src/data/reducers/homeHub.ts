import update from 'immutability-helper';
import * as TYPES from '../../actions/types.js';

const initialState = {
  activeItem: 'test'
};

export const homeHub = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
