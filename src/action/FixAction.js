import Channel from '../channel/indext';
import {
  AnsweredQuestionBySort,
  AnsweredQuestionCourseBase,
  GetSubject,
  GetObject,
} from '../constant/constant';
var channel = new Channel();
function _onAnsweredQuestionBySort(e) {
  return dispatch => {
    return channel.onPostAnsweredQuestion(e).then(data => {
      return dispatch({
        type: AnsweredQuestionBySort.LIST,
        data: data,
      });
    });
  };
}
function _onAllAnsweredQuestion(teacherId) {
  return dispatch => {
    dispatch({
      type: AnsweredQuestionCourseBase.LIST,
      data: [],
      isLoadedCourse: true,
    });
    return channel.onAllQuestion(teacherId).then(data => {
      return dispatch({
        type: AnsweredQuestionCourseBase.LIST,
        data: data,
        isLoadedCourse: false,
      });
    });
  };
}
function _onAnsweredQuestionCourseBase(teacherId, groupCode, crsId) {
  return dispatch => {
    dispatch({
      type: AnsweredQuestionCourseBase.LIST,
      data: [],
      isLoadedCourse: true,
    });
    return channel
      .onPosAnsweredQuestionCourseBase(teacherId, groupCode, crsId)
      .then(data => {
        return dispatch({
          type: AnsweredQuestionCourseBase.LIST,
          data: data,
          isLoadedCourse: false,
        });
      });
  };
}
function _onAllAnsweredReserved(teacherId) {
  return dispatch => {
    dispatch({
      type: AnsweredQuestionCourseBase.LIST,
      data: [],
      isLoadedCourse: true,
    });
    return channel.onAllReserved(teacherId).then(data => {
      return dispatch({
        type: AnsweredQuestionCourseBase.LIST,
        data: data,
        isLoadedCourse: false,
      });
    });
  };
}
function _onReservedQuestionCourseBase(teacherId, groupCode, crsId) {
  return dispatch => {
    dispatch({
      type: AnsweredQuestionCourseBase.LIST,
      data: [],
      isLoadedCourse: true,
    });
    return channel.onPostReserved(teacherId, groupCode, crsId).then(data => {
      return dispatch({
        type: AnsweredQuestionCourseBase.LIST,
        data: data,
        isLoadedCourse: false,
      });
    });
  };
}
function _onAllNoAnswered() {
  return dispatch => {
    dispatch({
      type: AnsweredQuestionCourseBase.LIST,
      data: [],
      isLoadedCourse: true,
    });
    return channel.onAllNo().then(data => {
      return dispatch({
        type: AnsweredQuestionCourseBase.LIST,
        data: data,
        isLoadedCourse: false,
      });
    });
  };
}
function _onNoAnsweredQuestionCourseBase(teacherId, groupCode, crsId) {
  return dispatch => {
    dispatch({
      type: AnsweredQuestionCourseBase.LIST,
      data: [],
      isLoadedCourse: true,
    });
    return channel
      .onNoAnsweredQuestionCourseBase(teacherId, groupCode, crsId)
      .then(data => {
        return dispatch({
          type: AnsweredQuestionCourseBase.LIST,
          data: data,
          isLoadedCourse: false,
        });
      });
  };
}
function _onGroups(e) {
  return dispatch => {
    return channel.onPostGroups(e).then(data => {
      return dispatch({
        type: AnsweredQuestionBySort.GROUPS,
        data: data,
      });
    });
  };
}
function _onCourse(e) {
  return dispatch => {
    return channel.onPostCourse(e).then(data => {
      return dispatch({
        type: AnsweredQuestionBySort.COURSE,
        data: data,
      });
    });
  };
}
function _onDeleteReserveQuestion(teacherId, questionId) {
  return channel.postDeleteReserveQuestion(teacherId, questionId).then(data => {
    return data;
  });
}

function _onPostInsertAnswer(
  answerText,
  SumSbjId,
  questionId,
  teacherId,
  SumObjId,
) {
  return channel
    .postInsertAnswer(answerText, SumSbjId, questionId, teacherId, SumObjId)
    .then(data => {
      return data;
    });
}
function _onPostSaveReserved(teacherId, questionId) {
  return channel.postSaveReserved(teacherId, questionId).then(data => {
    return data;
  });
}
function _onPstSetAnswerFilePath2(
  voiceFileName,
  imageFileName,
  questionId,
  teacherId,
) {
  return channel
    .postSetAnswerFilePath2(voiceFileName, imageFileName, questionId, teacherId)
    .then(data => {
      return data;
    });
}
function _onPostAnswerUpload(answerId, image, voice) {
  return channel.postAnswerUpload(answerId, image, voice).then(data => {
    return data;
  });
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

export default {
  _onAnsweredQuestionBySort,
  _onGroups,
  _onCourse,
  _onPostInsertAnswer,
  _onPstSetAnswerFilePath2,
  _onAnsweredQuestionCourseBase,
  _onReservedQuestionCourseBase,
  _onNoAnsweredQuestionCourseBase,
  _onAllAnsweredQuestion,
  _onAllNoAnswered,
  _onPostAnswerUpload,
  _onAllAnsweredReserved,
  _onDeleteReserveQuestion,
  _onPostSaveReserved,
  _onGetObject,
  _onGetSubject,
};
