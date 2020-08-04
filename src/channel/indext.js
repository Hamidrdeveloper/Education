import axios from 'react-native-axios';
import address from './address';
import {UserData} from '../model/userData';
import {AsyncStorage} from 'react-native';
import Toast from 'react-native-simple-toast';

export default class Channel {
  constructor(options) {
    this.options = options;
  }
  onPostLogin(e) {
    var add = address.postLogin();
 

    return axios
      .post(add, {
        nationalCode: e,
      })
      .then(res => {
        // alert("res")
        if (res.data.Status === 1) {
          UserData.jsonData = res.data.Data;
        
          AsyncStorage.multiSet([
            ['userid', res.data.Data.teacherInfo.Rid + ''],
            ['dataUser', JSON.stringify(UserData.jsonData) + ''],
          ]);
          return res.data.Status;
        } else {
          return null;
        }
      })
      .catch(error => {
        // alert("error")
        console.log("error")
        return '';
      });

      
  }

  onPostGroups(e) {
    var add = address.postGroups();

    return axios
      .post(add)
      .then(res => {
        if (res.data.Status === 1) {
          var arr = [{groupCode: 0, groupName: 'همه مقاطع'}];
          res.data.Data.forEach(element => {
            arr.push(element);
          });

          return arr;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  onPostCourse(e) {
    var add = address.postCourse();

    return axios
      .post(add, {
        groupcode: e,
      })
      .then(res => {
        if (res.data.Status === 1) {
        
          var arr = [{CourseId: 0, CrsId: 0, CrsName: 'همه دروس'}];
          res.data.Data.lessons.forEach(element => {
            arr.push(element);
          });
          return arr;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }

  onAllQuestion(teacherId) {
    var add = address.postAllQuestion();

    return axios
      .post(add, {
        teacherId: teacherId,
      })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data.questions;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }

  onPostAnsweredQuestion(e) {
    var add = address.postAnsweredQuestion();

    return axios
      .post(add, {
        teacherId: e,
      })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data.questions;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  onPosAnsweredQuestionCourseBase(teacherId, groupCode, crsId) {
    var add = address.postAnsweredQuestionCourseBase();
    if (crsId === null) {
      add = address.postQuestionGroupBase();
    } else {
      add = address.postAnsweredQuestionCourseBase();
    }

    console.log(teacherId+""+add+" "+groupCode+" "+ crsId )

    return axios
      .post(add, {
        teacherId: teacherId,
        groupCode: groupCode,
        crsId: crsId,
      })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data.questions;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  onAllReserved(teacherId) {
    var add = address.postAllReserved();

    return axios
      .post(add, {
        teacherId: teacherId,
      })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data.questions;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  onPostReserved(teacherId, groupCode, crsId) {
    var add = address.postReserved();

    if (crsId === null) {
      add = address.postReservedGroupBase();
    } else {
      add = address.postReserved();
    }
    console.log(teacherId+""+add+" "+groupCode+" "+ crsId )
    return axios
      .post(add, {
        teacherId: teacherId,
        groupCode: groupCode,
        crsId: crsId,
      })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data.questions;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  onQuestionCourseBase(teacherId, groupCode, crsId) {
    var add = address.postReserved();
    console.log(teacherId+""+add+" "+groupCode+" "+ crsId )
    return axios
      .post(add, {
        teacherId: teacherId,
        groupCode: groupCode,
        crsId: crsId,
      })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data.questions;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }

  onAllNo() {
    var add = address.postAllNo();

    return axios
      .post(add)
      .then(res => {
        if (res.data.Status === 1) {
          console.log(res.data.Data.questions.length)
          return res.data.Data.questions;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  onNoAnsweredQuestionCourseBase(teacherId, groupCode, crsId) {
    var add = '';

    if (crsId === null) {
      add = address.postNoQuestionGroupBase();
    
    } else {
      add = address.postGetNoAnsweredQuestionCourseBase();
    }
    console.log(teacherId+""+add+" "+groupCode+" "+ crsId )
    return axios
      .post(add, {
        teacherId: teacherId,
        groupCode: groupCode,
        crsId: crsId,
      })
      .then(res => {
        console.log(res)
        if (res.data.Status === 1) {
          return res.data.Data.questions;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }

  postDeleteReserveQuestion(teacherId, questionId) {
    var add = address.DeleteReserveQuestion();

    return axios
      .post(add, {
        teacherId: teacherId,
        questionId: questionId,
      })
      .then(res => {
        if (res.data.Status === 1) {
          Toast.show('با موفقت  لفو شد');

          return res.data.Data;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  postInsertAnswer(answerText, SumSbjId, questionId, teacherId, SumObjId) {
    var add = address.InsertAnswer();


    return axios
      .post(add, {
        teacherId: teacherId,
        questionId: questionId,
        answerText: answerText,
        SumObjId: SumObjId,
        SumSbjId: SumSbjId,
      })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  postSetAnswerFilePath2(voiceFileName, imageFileName, questionId, teacherId) {
    var add = address.SetAnswerFilePath2();
    Toast;
    return axios
      .post(add, {
        teacherId: teacherId,
        questionId: questionId,
        voiceFileName: voiceFileName,
        imageFileName: imageFileName,
      })
      .then(res => {
        if (res.data.Status === 1) {
          Toast.show('پاسخ با موفقیت ارسال شد');
          return res.data.Data;
        } else {
          Toast.show('پاسخ ارسال نشد');
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  postAnswerUpload(answerId, image, voice) {
    var add = address.AnswerUpload(answerId);

    let data = new FormData();
    data.append('photo', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    });
    data.append('file', {
      uri: voice.uri,
      type: voice.type,
      name: voice.name,
    });
    

    return axios({
      url: add,
      method: 'POST',
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
     
      },
    })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  postSaveReserved(teacherId, questionId) {
    var add = address.postSaveReserved();

    //   g(image);
    return axios
      .post(add, {
        teacherId: teacherId,
        questionId: questionId,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
         
        },
      })
      .then(res => {
        if (res.data.Status === 1) {
          Toast.show('با موفقت  رزرو شد');
          return res.data.Data;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  postGetSubject(questionId) {
    var add = address.postGetSubject();
    
    //   g(image);
    return axios
      .post(add, {
        crsId: questionId,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
       
        },
      })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data.lessons;
        } else {
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  postGetObject(subjectId) {
    var add = address.postGetObject();
    //   g(image);
    return axios
      .post(add, {
        subjectId: subjectId,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
         
        },
      })
      .then(res => {
        if (res.data.Status === 1) {
          return res.data.Data.lessons;
        } else {
          return '';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  postTeacherPayload(teacherId) {
    var add = address.getTeacherPayload(teacherId);
    //   g(image);
    return axios
      .post(add, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
         
        },
      })
      .then(res => {
    
        if (res.data.Status === 1) {

          return res.data.Data.payList;
        } else {
       
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
  postTeacherRate(teacherId) {
    var add = address.getTeacherRate(teacherId);
    //   g(image);
    console.log(add)
    return axios
      .post(add, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
         
        },
      })
      .then(res => {
         console.log(res)
        if (res.data.Status === 1) {

          return res.data.Data;
        } else {
         
          return '0';
        }
      })
      .catch(error => {
        return '0';
      });
  }
}
