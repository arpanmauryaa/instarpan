import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import googleplay from '../../assets/googleplay.png'
import microsoft from '../../assets/microsoft.png'
import { NavLink } from 'react-router-dom'

function SignUp() {

    return (
        <>
            <div >
                <div className='text-center sm:w-80 mx-auto'>
                    <form className='border-2 rounded lg:px-8 mt-3 px-5 pb-10' action="">
                        <div>
                            <p className='text-center text-4xl instarpan  pb-5 pt-10'>Instarpan</p>
                            <p className='text-center text-sm text-gray-600'>Sign up to see photos and videos from your friends.</p>

                            <div className='flex justify-center mt-5'>
                                <p className='bg-sky-600 px-9 rounded py-1 text-sm flex cursor-pointer hover:bg-sky-500'><AiFillFacebook className='text-lg text-white ' /><span className='ms-2 text-white'>Log in with Facebook</span> </p>
                            </div>

                            <div class="flex items-center pt-4 pb-3">
                                <div class="flex-1 mr-4">
                                    <hr class="h-0.5 bg-gray-300" />
                                </div>
                                <div class="text-gray-500 text-sm">OR</div>
                                <div class="flex-1 ml-4">
                                    <hr class="h-0.5 bg-gray-300" />
                                </div>
                            </div>
                            <input type="text"
                                className=" bg-gray-50 border rounded border-gray-400 text-gray-700 p-2
                    w-full  leading-tight focus:outline-none focus:border-blue-500 text-sm" placeholder='Mobile number or email' />

                            <input type="text"
                                className=" bg-gray-50 border rounded border-gray-400 text-gray-700 p-2 mt-1.5
                    w-full  leading-tight focus:outline-none focus:border-blue-500 text-sm" placeholder='Full Name' />

                            <input type="text"
                                className="mt-1.5 bg-gray-50 border rounded border-gray-400 text-gray-700 p-2
                    w-full  leading-tight focus:outline-none focus:border-blue-500 text-sm" placeholder='Username' />

                            <input type="text"
                                className="mt-1.5 bg-gray-50 border rounded border-gray-400 text-gray-700 p-2
                    w-full  leading-tight focus:outline-none focus:border-blue-500 text-sm" placeholder='Password' />

                            <p className='text-xs mt-3'>People who use our service may have uploaded your contact information to Instagram. <span className='text-sky-900 cursor-pointer'>Learn More</span></p>
                            <p className='text-xs mt-3'>By signing up, you agree to our
                                <span className='text-sky-800 cursor-pointer'>Terms</span> , <span className='text-sky-800 cursor-pointer'>Privacy Policy</span>  and <span className='text-sky-800 cursor-pointer'>Cookies Policy</span> .</p>
                            <button type="submit" className='border w-full text-sm py-1 rounded mt-3 bg-sky-600 hover:bg-sky-500 text-white'>Sign up</button>
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


                <div className='text-center text-xs md:mx-4 mx-2 lg:mx-0 mt-14 '>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500   ">Meta</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">About</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Blog</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Jobs</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Help</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">API</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Privacy</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Terms</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Locations</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Instagram Lite</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Threads</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Contact Uploading & Non-Users</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-blue-500  ">Meta Verified</a>
                    </div>
                </div>

                <p className='text-center text-xs mt-5 text-gray-600 '>© 2024 Instagram from Meta</p>
            </div>
        </>
    )
}

export default SignUp
