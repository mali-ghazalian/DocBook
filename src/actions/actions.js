import { KeyboardAvoidingView } from "react-native";
import { login, register, forgotPassword, verifyForgotKey, changePasswordCheck } from "../services/auth-service";

export const types = {
    LOG_IN_LOAD: 'LOG_IN_LOAD',
    LOG_IN_SUCCEED: 'LOG_IN_SUCCEED',
    LOG_IN_FAILED: 'LOG_IN_FAILED',
    LOG_OUT: 'LOG_OUT',
    REGISTER_SUCCEED: 'REGISTER_SUCCEED',
    REGISTER_FAILED: 'REGISTER_FAILED',
    CLEAN_ERR: 'CLEAN_ERR',
    FORGOTTOKEN_SENT: 'FORGOTTOKEN_SENT',
    FORGOTTOKEN_FAILD: 'FORGOTTOKEN_FAILD',
    TOKEN_Key_VERIFIED: 'TOKEN_Key_VERIFIED',
    TOKEN_NOT_VALID: 'TOKEN_NOT_VALID',
    PASSWORD_CHANGED: 'PASSWORD_CHANGED',
    PASSWORD_NOT_CHANGED: "PASSWORD_NOT_CHANGED"
};

export const userLogin = (email, password) => async dispatch => {
    dispatch({ type: types.LOG_IN_LOAD, payload: true });
    await login(email, password)
    .then(response => {
        if(response?.status){
            dispatch({ type: types.LOG_IN_SUCCEED, payload: response?.token });
            
        } else {
            dispatch({ type: types.LOG_IN_FAILED, payload: response?.msg });
            
        }
    }).catch(error => {
        dispatch({ type: types.LOG_IN_FAILED, payload: error.message });
    }).finally(()=> {
        dispatch({ type: types.LOG_IN_LOAD, payload: false });
    });
    
}

export const userRegister = (userInfo) => async dispatch => {
    dispatch({ type: types.LOG_IN_LOAD, payload: true });
    await register(userInfo)
    .then(response => {
        if(response?.status){
            dispatch({ type: types.REGISTER_SUCCEED});

        } else {
            dispatch({ type: types.REGISTER_FAILED, payload: response?.msg });
            
        }
    }).catch(error => {
        dispatch({ type: types.REGISTER_FAILED, payload: error.message });
    }).finally(()=> {
        dispatch({ type: types.LOG_IN_LOAD, payload: false });
    });
}

export const forgotKeySend = (userEmail) => async dispatch => {
    dispatch({ type: types.LOG_IN_LOAD, payload: true });
    await forgotPassword(userEmail)
    .then(response => {
        if(response?.status){
            dispatch({ type: types.FORGOTTOKEN_SENT, payload: userEmail });
        }else {
            dispatch({ type: types.FORGOTTOKEN_FAILD, payload: response?.msg });
        }
    }).catch(error => {
        dispatch({ type: types.FORGOTTOKEN_FAILD, payload: error.message });
    }).finally(() => {
        dispatch({ type: types.LOG_IN_LOAD, payload: false });
    });

}

export const verifyKey = (userEmail, tokenKey) => async dispatch => {
    dispatch({ type: types.LOG_IN_LOAD, payload: true });
    await verifyForgotKey(userEmail, tokenKey)
    .then(response => {
        console.log(JSON.stringify(response));
        if(response?.status){
            dispatch({ type: types.TOKEN_Key_VERIFIED});
        }else {
            dispatch({ type: types.TOKEN_NOT_VALID, payload: response?.msg });
        }
    }).catch(error => {
        dispatch({ type: types.TOKEN_NOT_VALID, payload: error.message });
    }).finally(() => {
        dispatch({ type: types.LOG_IN_LOAD, payload: false });
    });
}

export const changePassword = (userEntry) => async dispatch => {
    dispatch({ type: types.LOG_IN_LOAD, payload: true });
    await changePasswordCheck(userEntry)
    .then(response => {
        if(response?.status){
            dispatch({ type: types.PASSWORD_CHANGED});
        }else {
            dispatch({ type: types.PASSWORD_NOT_CHANGED, payload: response?.msg });
        }
    }).catch(error => {
        dispatch({ type: types.PASSWORD_NOT_CHANGED, payload: error.message });
    }).finally(() => {
        dispatch({ type: types.LOG_IN_LOAD, payload: false });
    });
}


