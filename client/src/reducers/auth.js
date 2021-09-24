import { ACTION_TYPES_AUTH } from '../constants/actionTypes'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case ACTION_TYPES_AUTH.AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case ACTION_TYPES_AUTH.LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;