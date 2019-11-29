
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { loginAPI } from '../../services/axios/api';

import {
    LOGIN_USER,
    LOGOUT_USER
} from 'Constants/actionTypes';

import {
    loginUserSuccess
} from './actions';

const loginWithUsernamePasswordAsync = async (username, password) =>
    await loginAPI(username, password)
        .then(authUser => authUser)
        .catch(error => error);

function* loginWithUsernamePassword({ payload }) {

	const { username, password } = payload.user;
	const { history } = payload;
	
	try {
			const loginUser = yield call(loginWithUsernamePasswordAsync, username, password);

            if (loginUser.data) {

                const token = loginUser.data.token;

                if (token != '') {
                    
                    // Save admin info to localStorage
                    localStorage.setItem("clientID", loginUser.data.account.CustomerID);
                    localStorage.setItem("userName", loginUser.data.account.UserName);
                    localStorage.setItem("accessToken", loginUser.data.account.AccessToken);
                    localStorage.setItem("name", loginUser.data.account.Name);
                    localStorage.setItem('email', loginUser.data.account.Email);
    
                    let authData = {
                        clientID: loginUser.data.account.CustomerID,
                        userName: loginUser.data.account.UserName,
                        accessToken: loginUser.data.account.AccessToken,
                        name: loginUser.data.account.Name,
                        email: loginUser.data.account.Email
                    };

                    yield put(loginUserSuccess(authData));
                    history.push('/');
                }
			}
            
            return;
	} catch (error) {
			// catch throw
			console.log('login error : ', error)
	}
}

function* logout({payload}) {
    const { history } = payload
    try {
            // yield call(logoutAsync, history);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('clientID');
            localStorage.removeItem('email');
            localStorage.removeItem('name');
            localStorage.removeItem('userName');

            yield call(logoutUser, history);
            history.push('/')
    } catch (error) {
    }
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithUsernamePassword);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser)
    ]);
}