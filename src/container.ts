import { App as Component } from './App';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';

const mapStateToProps = (state: any) => {
  return {
    activeItem: state.homeHub.activeItem
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onClick: () => alert(1)
  };
};

export const App = compose(connect(mapStateToProps, mapDispatchToProps))(
  Component
);
