import { App as Component } from './App';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
//import { SetActiveItem, IAction } from './data/actions/actions';
import { IAppState } from './data/store';

const mapStateToProps = (state: IAppState) => {
  return {
    activeItem: state.homeHub.activeItem,
    createIsOpen: state.homeHub.createIsOpen
  };
};

/*THIS COULD BE USED LATER BUT I AM USING HOOKS TO DO ALL THE DISPATCHING VERSUS PASSING IT IN THE
STATE OF 'APP' */
// const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
//   return {
//     onClick: () => dispatch(SetActiveItem('tesasdf'))
//   };
// };

export const App = compose(connect(mapStateToProps))(Component);
