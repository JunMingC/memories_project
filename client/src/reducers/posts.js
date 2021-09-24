import { ACTION_TYPES_POST } from '../constants/actionTypes'

const reducer = (posts = [], action) => {
    switch (action.type) {
        case ACTION_TYPES_POST.DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case ACTION_TYPES_POST.UPDATE:
        case ACTION_TYPES_POST.LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case ACTION_TYPES_POST.FETCH_ALL:
            return action.payload;
        case ACTION_TYPES_POST.CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
};

export default reducer;