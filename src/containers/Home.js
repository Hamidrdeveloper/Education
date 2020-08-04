import React, {Component} from 'react';
import {Provider, createStoreHook} from 'react-redux';
import HomeScreen from '../screen/Home/home';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import {NavigationActions, StackActions} from 'react-navigation';
const store = createStore(reducers, applyMiddleware(thunk));
export default class Home extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <HomeScreen navigation={this.props.navigation} />
      </Provider>
    );
  }
}
