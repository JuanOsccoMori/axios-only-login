import axios from 'axios';

// Variables de accion
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


const requestLogin = response => ({
    type:LOGIN_REQUEST,
    payload: response.data
})

const successLogin = response => ({
    type: LOGIN_SUCCESS,
    payload: response.data
})

const failureLogin = response => ({
    type: LOGIN_FAILURE,
    payload: response.error.message
})

export const axiosLogin = (username, password) => async (dispatch) => {
    try {
        dispatch(requestLogin)
        const response = await axios.post(process.env.REACT_APP_API_URL,
            { username, password }
        )
        // Para el envio de datos
        dispatch(successLogin(response))
        // Para ver los datos que envia
        console.log(response.data)

    }
    catch (error) {
        dispatch(failureLogin(error))
    }
}