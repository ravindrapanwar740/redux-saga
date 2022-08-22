import { call, put } from 'redux-saga/effects';
import { setUser, getUser } from '../../reducers/index';
import { requestGetUser, requestCreateUser, requestDeleteUser, requestUpdateUser } from '../requests/index';

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    if (response.status === 200) {
      yield put(setUser(data));
    }
  } catch (error) {
    console.log(error)
  }
}


export function* handleCreateUser(action) {
  try {
    const response = yield call(requestCreateUser, action.payload);

    const { data } = response;
    if (response.status === 200) {
      yield put(setUser(data));
    }
  } catch (error) {
    console.log(error)
  }
}


export function* handleDeleteUser(action) {
  try {
    const response = yield call(requestDeleteUser, action.payload);

    if (response.status === 200) {
      yield put(getUser());
    }
  } catch (error) {
    console.log(error)
  }
}


export function* handleUpdateUser(action) {
  try {
    const response = yield call(requestUpdateUser, action.payload);

    if (response.status === 200) {
      yield put(getUser());
    }
  } catch (error) {
    console.log(error)
  }
}
