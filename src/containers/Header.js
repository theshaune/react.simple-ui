import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

function mapStateToProps(state) {
  return { state };
}

const HeaderContainer = props => <Header {...props} />;

export default connect(mapStateToProps)(HeaderContainer);
