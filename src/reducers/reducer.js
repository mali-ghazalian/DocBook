import { types } from '../actions';
const initialState = {
  token: '',
  isLoading: false,
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN_SUCCEED:
          return {...state, token: action.payload, loginErr: ''};
        case types.LOG_IN_FAILED:
          return {...state, loginErr: action.payload};
        case types.LOG_IN_LOAD:
          return {...state, isLoading: action.payload};
        case types.LOG_OUT:
          return {...state, token: null, loginErr: ''};
        case types.REGISTER_SUCCEED:
          return {...state, registerStatus: true, registerErr: ''};
        case types.REGISTER_FAILED: 
          return {...state, registerErr: action.payload, registerStatus: false};
        case types.CLEAN_ERR:
          return {...state, registerErr:'', loginErr: '', errMsg:''};
        case types.FORGOTTOKEN_SENT:
          return {...state, forgotTokenStatus: true, userEmail: action.payload};
        case types.FORGOTTOKEN_FAILD:
          return {...state, forgotTokenStatus: false, errMsg: action.payload};
        case types.TOKEN_Key_VERIFIED:
          return {...state, keyVerifyStatus: true};
        case types.TOKEN_NOT_VALID:
          return {...state, keyVerifyStatus: false, errMsg: action.payload};
        case types.PASSWORD_CHANGED:
          return {...state, ChangePassStatus: true};
        case types.PASSWORD_NOT_CHANGED:
          return {...state, ChangePassStatus: false, errMsg: action.payload};
        default:
          return state;
    }
};


export { userReducer };