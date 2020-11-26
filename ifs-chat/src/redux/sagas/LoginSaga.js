//login Saga

import { put, takeLatest } from 'redux-saga/effects';
import { saveLoginInfo, saveLoginInfoSuccess } from '../reducers/LoginReducer.js';

const saveInfo = function* ({ payload }) {

    yield put({
        payload: {
            username: payload.username,
        }, type: saveLoginInfoSuccess.type,
    });

};

export function* saveLoginInfoWatcher() {
    yield takeLatest(saveLoginInfo.type, saveInfo);
}