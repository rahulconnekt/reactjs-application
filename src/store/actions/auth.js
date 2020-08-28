import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    console.log("actions wala success")
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    console.log(error);
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            value: username,
            password: password,
        };
        let url = 'http://13.126.89.240:8080/user/login';
        axios.post(url, authData, {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => {
                console.log(response.data);
                // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 10000000);
                localStorage.setItem('token', response.data.token);
                // localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.data._id);
                // dispatch(authSuccess(response.data.token, response.data.data._id));
                // dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail({
                    error: err.response ? err.response.data : null
                }));
            });
    };
};

// export const auth = (username, password) => {
//     return dispatch => {
//         dispatch(authStart());
//         const authData = {
//             value: username,
//             password: password,
//         };
//         let url = 'http://34.229.234.234:8080/user/signup';
//         axios.post(url, authData, {
//             headers: {
//                 'content-type': 'application/json'
//             }
//         })
//             .then(response => {
//                 console.log(response.data);
//                 // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 10000000);
//                 localStorage.setItem('token', response.data.token);
//                 // localStorage.setItem('expirationDate', expirationDate);
//                 localStorage.setItem('userId', response.data.data._id);
//                 dispatch(authSuccess(response.data.token, response.data.data._id));
//                 // dispatch(checkAuthTimeout(response.data.expiresIn));
//             })
//             .catch(err => {
//                 dispatch(authFail(err.response.data.error));
//             });
//     };
// };

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};