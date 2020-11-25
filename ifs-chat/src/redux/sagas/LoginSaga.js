//login Saga

import { all, delay, put, takeLatest, call } from 'redux-saga/effects';
import { saveLoginInfo ,saveLoginInfoSuccess} from '../reducers/LoginReducer.js';

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

/* export function* saveLoginInfoSagas() {
    yield all([call(saveLoginInfoWatcher)]);
}
 */