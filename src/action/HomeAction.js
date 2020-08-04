import Channel from '../channel/indext';
import {AnsweredQuestion, GetSubject, GetObject, GetTeacherPayload, GetTeacherRate} from '../constant/constant';
var channel = new Channel();
function _onAnsweredQuestion(e) {
  return dispatch => {
    return channel.onAllNo(e).then(data => {
      return dispatch({
        type: AnsweredQuestion.LIST,
        data: data,
      });
    });
  };
}
function _onGetSubject(e) {
  return dispatch => {
    return channel.postGetSubject(e).then(data => {
    
      return dispatch({
        type: GetSubject.LIST,
        data: data,
      });
    });
  };
}
function _onGetObject(e) {
  return dispatch => {
    return channel.postGetObject(e).then(data => {
      return dispatch({
        type: GetObject.LIST,
        data: data,
      });
    });
  };
}
function _onGetTeacherPayload(e) {
  return dispatch => {
    return channel.postTeacherPayload(e).then(data => {
      return dispatch({
        type: GetTeacherPayload.LIST,
        data: data,
      });
    });
  };
}
function _onGetTeacherRate(e) {
  return dispatch => {
    return channel.postTeacherRate(e).then(data => {
      return dispatch({
        type: GetTeacherRate.LIST,
        data: data,
      });
    });
  };
}
export default {_onAnsweredQuestion, _onGetSubject, _onGetObject,_onGetTeacherPayload,_onGetTeacherRate};
