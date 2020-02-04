import update from 'immutability-helper';
import * as TYPES from 'Src/actions/types';

const getInitialState = () => ({
  applyStep: 0,
  navLocation: 'dropdownNav',
  navLocationName: 'Hiring',
  errors: [],
  navMenuActiveItem: 'Hiring',
  pageToShow: 'https://analytics.indeed.com/analytics/jobs?',
  bulkUsers: [{ name: '', email: '', phone: '' }]
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case TYPES.ADD_BULK_USER:
      return update(state, {
        bulkUsers: {
          $push: [action.payload]
        }
      });
    case TYPES.EDIT_BULK_USER:
      return update(state, {
        bulkUsers: {
          $set: action.payload
        }
      });
    case TYPES.SET_STEP:
      return update(state, {
        applyStep: { $set: action.payload }
      });
    case TYPES.RESET_APP:
      return getInitialState();
    case TYPES.SET_NAV_LOCATION:
      return update(state, {
        navLocation: { $set: action.payload },
        navLocationName: { $set: action.payload }
      });
    case TYPES.SET_NAV_ACTIVE_ITEM:
      return update(state, {
        navMenuActiveItem: { $set: action.payload }
      });
    case TYPES.SET_PAGE_TO_SHOW:
      return update(state, {
        pageToShow: { $set: action.payload }
      });
    default:
      return { ...state };
  }
};
