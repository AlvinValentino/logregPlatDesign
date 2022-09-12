import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Alert } from '../components'
import decode from 'jwt-decode'
// import { GoogleLogin } from '@react-oauth/google'
// import LoginGithub from 'react-login-github';

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('user'))

function Login(props) {
  const [passtype, setPasstype] = useState(false)

  const { alert, setAlert } = props
  const [token, setToken] = useState(users ? users : userGoogle)

  const [checked, setChecked] = useState(
    localStorage.getItem('email') ? true : false
  )
  const [formData, setFormData] = useState({
    email: localStorage.getItem('email') || '',
    password: '',
  })

  useEffect(() => {
    if (token) {
      window.location.href = '/home'
    }
  }, [token])

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const loginHandler = async (e) => {
    e.preventDefault()

    if (formData.email === '' || formData.password === '') {
      setTimeout(() => {
        setAlert({ isOpen: false })
      }, 5000)

      return setAlert({
        isOpen: true,
        title: 'Field masih kosong!',
        message: 'Ayo diisi.',
      })
    }

    await axios.post('http://localhost:8000/api/login', formData)
      .then((response) => {
        localStorage.removeItem('email')
        if (checked === true) {
          localStorage.setItem('email', formData.email)
        }
        localStorage.setItem('token', JSON.stringify(response.data.token))
        window.location.href = '/home'
      })
      .catch((err) => {
        const {
          response: { error },
        } = err

        setAlert({
          isOpen: true,
          message: error,
          variant: 'bg-red-100',
          textVariant: 'text-red-800',
        })
      })

    setTimeout(() => {
      setAlert({ isOpen: false })
    }, 5000)
  }

  return (
    <div className='h-screen m-auto'>
      <div hidden className='fixed inset-0 w-5/12 text-white lg:block -z-10'>
        <a href='/'>
          <img
            className='w-full h-full object-cover'
            src='/images/bg1.png'
            alt='bg1'
          />
        </a>
        <div className='absolute inset-0 bg-ov bg-opacity-20'></div>
      </div>
      <div className='relative h-full ml-auto lg:w-7/12 flex items-center'>
        <div className='m-auto py-12 px-6 sm:p-20 xl:w-10/12'>
          <div className='space-y-5'>
            <a href='/'>
              <img
                src='/images/logo.png'
                className='w-64 inline'
                alt='devla logo'
              />
            </a>
            <p className='font-medium text-lg text-gray-500'>
              Welcome to Devla ! Login first
            </p>
          </div>
          <div className='mt-12 gap-6 sm:grid-cols-2 flex justify-center'>
            {/* <button onClick={() => login()} className="py-3 px-6 rounded-xl bg-orange-100 hover:bg-orange-200 focus:bg-orange-200 active:bg-orange-300">
                            <div className="flex gap-4 items-center justify-center text-white">
                                <img src="/images/google.png" className="w-5" alt="" />
                                <span className="block w-max font-medium tracking-wide text-sm text-black">with Google</span>
                            </div>
                        </button> */}
            {/* <LoginGithub className="rounded-full border px-[9px] hover:bg-biruMuda bg-opacity-100 hover:border-blue-100" clientId="08db4bf7cc9ce577a7f3" onSuccess={(response) => {
                            console.log(response)
                        }} onFailure={(err) => console.log(err)}>
                            <img className="w-5 h-5" src="/images/github.png" alt="" />
                        </LoginGithub> */}

            {/* <GoogleLogin
              type='icon'
              shape='circle'
              onSuccess={(response) => {
                // localStorage.removeItem('email')
                localStorage.removeItem('userGoogle')
                localStorage.setItem(
                  'userGoogle',
                  JSON.stringify(response.credential)
                )
                window.location.href = '/home'
              }}
              onError={() => {
                console.log('Login Failed!')
              }}
              useOneTap
            /> */}
          </div>
          <div className='mt-12 border-t'>
            <span className='block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white'>
              or
            </span>
          </div>
          {/* <form onSubmit={loginHandler} method="POST"> */}
          <div className='space-y-6 mt-10'>
            {alert.isOpen ? <Alert alert={alert} setAlert={setAlert} /> : null}
            <div className='relative flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 absolute ml-5 text-gray-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={(e) => HandleChange(e)}
                className='w-full py-3 pr-3 pl-12 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 outline-none focus:ring-2 focus:ring-gray-400 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none'
              />
            </div>
            <div className='relative flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 absolute ml-5 text-gray-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
              <input
                type={passtype ? 'text' : 'password'}
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={(e) => HandleChange(e)}
                className='w-full py-3 pr-3 pl-12 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 outline-none focus:ring-2 focus:ring-gray-400 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none'
              />
              {passtype ? (
                <button className='mb-4' onClick={() => setPasstype(false)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 absolute right-5 text-gray-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </button>
              ) : (
                <button className='mb-4' onClick={() => setPasstype(true)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 absolute right-5 text-gray-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className='flex justify-between -mt-2'>
              <div className='form-group form-check'>
                <input
                  value={checked}
                  checked={checked}
                  onChange={(e) => {
                    setChecked(e.target.checked)
                  }}
                  type='checkbox'
                  className='accent-orange-500 form-check-input h-4 w-4 border border-orange-500 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                  id='exampleCheck2'
                />
                <label
                  className='text-sm form-check-label inline-block text-orange-500'
                  htmlFor='exampleCheck2'
                >
                  Remember me
                </label>
              </div>
              <button type='reset' className='w-max'>
                <span className='text-sm tracking-wide text-gray-500'>
                  <a href='/forgot'>Forgot password ?</a>
                </span>
              </button>
            </div>
            <div className='text-center'>
              <button
                onClick={loginHandler}
                className='w-full px-6 py-3 rounded-xl bg-orange-500 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800'
              >
                <span className='font-semibold text-white text-lg'>Login</span>
              </button>
              <p className='w-max p-3 mx-auto'>
                <span className='text-sm tracking-wide'>
                  Don't have an account?{' '}
                  <a href='/register' className='text-sm text-orange-500'>
                    Register
                  </a>
                </span>
              </p>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  )
}

export default Login
