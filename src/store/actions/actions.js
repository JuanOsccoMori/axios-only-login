import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const successLogin = response => ({
    type: LOGIN_SUCCESS,
    payload: response.data
})

export const axiosLogin = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post(process.env.REACT_APP_API_URL,
            { username, password }
        )
        // Para el envio de datos
        dispatch(successLogin(response))
        // Para ver los datos que envia
        console.log(response.data)

    }
    catch (error) {
        console.log(error)
    }
}