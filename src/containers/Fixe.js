import React, {Component} from 'react';
import {Provider, createStoreHook} from 'react-redux';
import HomeScreen from '../screen/Home/home';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import FixeScreen from '../screen/FixeTest/FixeScreen';
const store = createStore(reducers, applyMiddleware(thunk));
export default class Fixe extends Component {
  render() {
    return (
      <Provider store={store}>
        <FixeScreen navigation={this.props.navigation}/>
      </Provider>
    );
  }
}
