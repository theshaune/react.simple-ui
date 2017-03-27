import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as navigationActions from '../actions/navigation';

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: () => dispatch(navigationActions.toggle())
  }
};

const HeaderContainer = props => <Header {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
