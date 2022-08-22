import { takeLatest } from "redux-saga/effects";
import { getUser, createUser, deleteUser, updateUser } from "../reducers/index"
import { handleGetUser, handleCreateUser, handleDeleteUser, handleUpdateUser } from "./handlers/user";


export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetUser);
  yield takeLatest(createUser.type, handleCreateUser);
  yield takeLatest(deleteUser.type, handleDeleteUser);
  yield takeLatest(updateUser.type, handleUpdateUser);
}


