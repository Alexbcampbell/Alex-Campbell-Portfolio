import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function getProject(action) {
  try {
    const response = axios.get(`/api/portfolio/${action.payload}`);
    console.log(response.data);
    yield put({
      type: 'SET_PROJECT',
      payload: response.data,
    });
  } catch (err) {
    console.log('ERROR GETTING PROJECTS', err);
    put({ type: 'GET_FAILED' });
  }
}

function* portfolioSaga() {
  yield takeLatest('GET_PROJECT', getProject);
}

export default contactSaga;
