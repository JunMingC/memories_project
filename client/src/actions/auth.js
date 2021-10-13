import { ACTION_TYPES_AUTH } from '../constants/actionTypes'
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: ACTION_TYPES_AUTH.AUTH, data });

        history.push("/");
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        console.log(data)
        dispatch({ type: ACTION_TYPES_AUTH.AUTH, data });

        history.push("/");
    } catch (error) {
        console.log(error);
    }
};