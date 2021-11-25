import { App as Component } from './App';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { SetFiller, IAction } from './data/actions/actions';
import { IAppState } from './data/store';

const mapStateToProps = (state: IAppState) => {
  return {

  };
};

//This is required for it to work. Not using it but is needed
const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    fillerMethod: () => dispatch(SetFiller(''))
  };
};

export const App = compose(connect(mapStateToProps, {}))(Component);
