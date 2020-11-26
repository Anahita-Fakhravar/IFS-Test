//root sagas
import { all, call } from 'redux-saga/effects';
import { saveLoginInfoWatcher } from './LoginSaga';

export default function* root() {
    yield all([call(saveLoginInfoWatcher)]);
}
