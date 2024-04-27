import React, { useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import googleplay from '../../assets/googleplay.png'
import microsoft from '../../assets/microsoft.png'
import { NavLink } from 'react-router-dom'
import Footer from '../../globalcomponents/Footer'
import InputField from '../../globalcomponents/InputField'
import Button1 from '../../globalcomponents/Button1'

function SignUp() {
    const [signUpData, setSignUpData] = useState({
        PhoneEmailUser: '',
        FullName: '',
        UserName: '',
        Password: ''
    })

    const handleChange = (e) => {
        setSignUpData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(signUpData, 'signUpData')
    }

    return (
        <>
            <div >
                <div className='text-center sm:w-80 mx-auto'>
                    <form onSubmit={handleSubmit} className='border-2 rounded lg:px-8 mt-3 px-5 pb-10' action="">
                        <div>
                            <p className='text-center text-4xl instarpan  pb-5 pt-10'>Instarpan</p>
                            <p className='text-center text-sm text-gray-600'>Sign up to see photos and videos from your friends.</p>

                            <div className='flex justify-center mt-5'>
                                <p className='bg-sky-600 px-9 rounded py-1 text-sm flex cursor-pointer hover:bg-sky-500'><AiFillFacebook className='text-lg text-white ' /><span className='ms-2 text-white'>Log in with Facebook</span> </p>
                            </div>

                            <div className="flex items-center pt-4 pb-3">
                                <div className="flex-1 mr-4">
                                    <hr className="h-0.5 bg-gray-300" />
                                </div>
                                <div className="text-gray-500 text-sm">OR</div>
                                <div className="flex-1 ml-4">
                                    <hr className="h-0.5 bg-gray-300" />
                                </div>
                            </div>

                            <InputField
                                type='text'
                                name='PhoneEmailUser'
                                value={signUpData.PhoneEmailUser}
                                handleChange={handleChange}
                                placeholder='Mobile number or email' />


                            <InputField
                                type='text'
                                name='FullName'
                                value={signUpData.FullName}
                                handleChange={handleChange}
                                placeholder='Full Name' marginT='mt-2' />


                            <InputField
                                type='text'
                                name='UserName'
                                value={signUpData.UserName}
                                handleChange={handleChange}
                                placeholder='Username' marginT='mt-2' />


                            <InputField
                                type='password'
                                name='Password'
                                value={signUpData.Password}
                                handleChange={handleChange}
                                placeholder='Password' marginT='mt-2' />

                            <p className='text-xs mt-3'>People who use our service may have uploaded your contact information to Instagram. <span className='text-sky-900 cursor-pointer'>Learn More</span></p>
                            <p className='text-xs mt-3'>By signing up, you agree to our
                                <span className='text-sky-800 cursor-pointer'>Terms</span> , <span className='text-sky-800 cursor-pointer'>Privacy Policy</span>  and <span className='text-sky-800 cursor-pointer'>Cookies Policy</span> .</p>
                            <Button1 type='submit' buttonName='Sign up' bgColor='bg-sky-600' bgHover='hover:bg-sky-500' />
                        </div>
                    </form>

                    <div>
                        <p className=' text-sm border-2 mt-2 text-center py-4'>Don't have an account? <span className='text-sky-800 hover:text-cyan-500 cursor-pointer'><NavLink to="/">Sign in</NavLink></span></p>
                        <p className='  text-center text-xs py-4'>Get the app</p>

                        <div className=' flex justify-center '>
                            <img src={googleplay} alt="googleplay" className='w-32 rounded cursor-pointer' />
                            <img src={microsoft} alt="microsoft" className='w-28 ms-2 cursor-pointer' />
                        </div>
                    </div>
                </div>


                <Footer />

            </div>
        </>
    )
}

export default SignUp
