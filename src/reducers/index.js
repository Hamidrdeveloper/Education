import {combineReducers} from 'redux';
import Home from './HomeList';
import Fixe from './FixeList';

const reducers = combineReducers({Home, Fixe});
export default reducers;
