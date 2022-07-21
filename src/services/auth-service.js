import axios from 'axios';
import { BASE_URL } from './config';

export const login = async (email, password) => {

  try{
    const response = await axios.post(BASE_URL + "login.php", {
      user_email: email,
      user_pass: password
    });
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
  
}

export const register = async (userInfo) => {
  try{

    const response = await axios.post(BASE_URL + "register.php", {
          user_email: userInfo.email,
          user_pass: userInfo.password,
          first_name: userInfo.firstName,
          last_name: userInfo.lastName,
          birth_date: userInfo.birthDate,
          mobile: userInfo.phone,
          unique_NO: userInfo.No
    });
    const data = await response.data;
    return data;

  }catch (error) {
    throw new Error(error.message);
  }

}

export const forgotPassword = async (userEmail) => {

  try {

    const response = await axios.post(BASE_URL + "forgotPassword.php", {
      user_email: userEmail
    });
    const data = await response.data;
    return data;

  }catch (error) {

    throw new Error(error.message);

  }
  
}

export const verifyForgotKey = async (userEmail, tokenKey) => {
  try {

    const response = await axios.post(BASE_URL + "verifyKey.php", {
      user_email: userEmail,
      token: tokenKey
    });

    const data = await response.data;
    return data;


  } catch (error) {
    throw new Error(error.message);
  }
  
}

export const changePasswordCheck = async userEntry => {
  
  try{

    const response = await axios.post(BASE_URL + "changePassword.php", {
      user_email: userEntry.email,
      user_pass: userEntry.password
    });

    const data = await response.data;
    return data;

  } catch (error) {
    throw new Error(error.message);
  }

}