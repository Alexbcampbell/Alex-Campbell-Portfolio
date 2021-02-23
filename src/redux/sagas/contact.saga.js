import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function postContact(action) {
  try {
    const response = axios.post('/api/contact', action.payload);
    console.log('LOOK HERE FOR POST CONTACT', response.data);
  } catch (err) {
    console.log('ERROR SENDING CONTACT INFO', err);
    put({ type: 'POST_FAILED' });
  }
}

function* contactSaga() {
  yield takeLatest('POST_CONTACT', postContact);
}

export default contactSaga;
