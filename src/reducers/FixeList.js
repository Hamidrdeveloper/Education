import {
  AnsweredQuestionBySort,
  AnsweredQuestionCourseBase,
} from '../constant/constant';
import createReducer from '../utils/createReducer';

const initialState = {
  isLoaded: true,
  recent: [],
  List: [],
  Log: '',
};
const actionHandler = {
  [AnsweredQuestionBySort.LIST]: (state, action) => {
    return {isLoaded: false, data: action.data};
  },
  [AnsweredQuestionBySort.GROUPS]: (state, action) => {
    return {isLoadedGroups: false, dataGroups: action.data};
  },
  [AnsweredQuestionBySort.COURSE]: (state, action) => {
    return {isLoadedCourseSort: false, dataCourse: action.data};
  },
  [AnsweredQuestionCourseBase.LIST]: (state, action) => {
    return {isLoadedCourse: action.isLoadedCourse, dataCourseBase: action.data};
  },
};
export default createReducer(initialState, actionHandler);
