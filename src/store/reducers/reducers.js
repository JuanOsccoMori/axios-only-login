import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from "../actions/actions";

const initialLoginState = {
    isLoading: false,
    data: null,
    error: null,
};

const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: null,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: null,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default function rootReducer() {
    return {
        login: loginReducer
    }
}