import axios from 'axios'

import { toast } from 'react-toastify'; import 'react-toastify/dist/ReactToastify.css';
const API_KEY = 'AIzaSyAiEoyghJMOvNXKpo57q5kiBigQw6tktbs'


export async function signUp() {

    const fakeUser = {
        email: 'ferid@gmail.com',
        password: '12345678',
        returnSecureToken: true
    }
    let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, fakeUser)
    console.log(response)
}


export async function signIn({ email, password }) {

    const user = {
        displayName : "Test user",
        email,
        password,
        returnSecureToken: true
    }
    try {
        let { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, user)
        return data;
    } catch (error) {
        //     <ToastContainer/>
        //     // toast.error(`${error.message}`)
        // console.log(error.response.data.error.message);
        toast.error(error.response.data.error.message, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
        })

    }

}