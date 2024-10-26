import React from 'react'
import { useFormik } from 'formik'
import formSchema from '../../Validation/Form';
import { signIn } from '../../API/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
  
export default function Form() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: formSchema,
    onSubmit: async values => {
      const result = await signIn(values);
      if(result){
        Cookies.set('token', result.idToken, {httpOnly: false, secure: true, sameSite: 'Strict' });
        toast('✓ Succesfull'); 
        navigate('/', {
          replace : true
        });
        window.location.reload();
      }
      
    },
  })

  return (
    <div className='bg-white w-[600px] h-[450px] flex flex-col rounded'>
      <div className='bg-gray-200 border-b-2 border-gray-300 w-full h-[70px] rounded'>
        <h1 className='text-center p-3 text-3xl font-bold'>Login</h1>
      </div>

      <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center  mt-12 max-w-[500px] ml-[50px]'>

        <div className='mb-10'>
          <input type="email"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] h-[60px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Email adress'
            name='email'
            onChange={formik.handleChange}
          />
          {
            formik.errors.email && <small className='text-red-700'>{formik.errors.email}</small>
          }
          
        </div>
        <div className='mb-8'>
          <input type="password"
            className='mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] h-[60px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Password..'
            name='password'
            onChange={formik.handleChange}
          />
          {
            formik.touched.password && <small className='text-red-700'>{formik.errors.password}</small>
          }
        </div>
        <div className='block mb-8'>
          <div className='flex justify-between items-center'>
            <a href="#" className='underline text-blue-500'>Forgot Password?</a>

            <button type='submit' className='text-lg bg-blue-500 text-white w-[60px] h-11 rounded'>
              Login
            </button>
          </div>
        </div>
      </form>

    </div>
  )
}
