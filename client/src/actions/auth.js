import { ACTION_TYPES_AUTH } from '../constants/actionTypes'
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        // log in the user... (WIP: creating endpoints in server)
        history.push("/");
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        // sign up the user... (WIP: creating endpoints in server)
        history.push("/");
    } catch (error) {
        console.log(error);
    }
};