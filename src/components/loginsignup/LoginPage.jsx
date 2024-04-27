import React, { useState, useEffect } from 'react';
import loginImage1 from "../../assets/loginImage1.png"
import loginimage2 from "../../assets/loginimage2.png";
import loginimage3 from "../../assets/loginimage3.png";
import screenshot4 from "../../assets/screenshot4.png";
import googleplay from "../../assets/googleplay.png"
import microsoft from "../../assets/microsoft.png";
import "../../../src/App.css"
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, NavLink } from 'react-router-dom';
import Footer from '../../globalcomponents/Footer';
import InputField from '../../globalcomponents/InputField';
import Button1 from '../../globalcomponents/Button1';




function LoginPage() {
    const navigate = useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [loginImage1, loginimage2, screenshot4];
    const [formData, setFormData] = useState({
        PhoneEmailUser: '',
        Password: ''
    })

    const handleChange = (e) => {
        setFormData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData, 'formData')
    }


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
            // console.log(currentImageIndex, 'currentImageIndex')
        }, 3000);
        // console.log(intervalId, 'intervalId')
        return () => clearInterval(intervalId);
    }, [images.length]);


    return (
        <div>
            <div className=' grid lg:grid-cols-2'>
                <div className='mt-20 justify-end flex'>
                    <div className='hidden lg:block relative'>
                        <div>
                            <img src={loginimage3} alt='img2' className='w-[250px] h-[500px] borderstyle me-28 ' />
                        </div>
                        <hr className="bg-neutral-800 h-7 rounded-b-xl w-32 absolute top-[20px] left-[150px] color1" />
                        <div >
                            <img src={images[currentImageIndex]} alt={`img${currentImageIndex + 1}`} className='w-[250px] shadow h-[520px] borderstyle absolute top-[10px] left-1/4  ' />
                        </div>
                    </div>
                </div>

                <div className='mx-auto lg:mx-0'>
                    <form onSubmit={handleSubmit} className='border-2  rounded lg:px-10 lg:w-80 w-80 lg:mt-20 px-5' action="">
                        <div>
                            <p className='text-center text-4xl instarpan  py-10'>Instarpan</p>
                            {/* <input type="text"
                                className=" bg-gray-50 border rounded border-gray-400 text-gray-700 p-2
                    w-full  leading-tight focus:outline-none focus:border-blue-500 text-sm" /> */}

                            <InputField type='text'
                                name='PhoneEmailUser'
                                value={formData.PhoneEmailUser}
                                handleChange={handleChange}
                                placeholder='Phone number, username , or email' />

                            <InputField type='password'
                                name='Password'
                                value={formData.Password}
                                handleChange={handleChange}
                                placeholder='Password' marginT='mt-3' />

                            <Button1 type="submit" buttonName='Log in' bgColor='bg-sky-800' />

                            <div className="flex items-center pt-4 pb-7">
                                <div className="flex-1 mr-4">
                                    <hr className="h-0.5 bg-gray-300" />
                                </div>
                                <div className="text-gray-500 text-sm">OR</div>
                                <div className="flex-1 ml-4">
                                    <hr className="h-0.5 bg-gray-300" />
                                </div>
                            </div>

                            <div className='flex justify-center '>
                                <AiFillFacebook className='text-xl text-blue-900' />
                                <p className='text-xs ps-2 hover:text-blue-500 text-blue-950 cursor-pointer'>Log in with Facebook</p>
                            </div>
                            <p className='text-xs text-center py-4 text-cyan-900 hover:text-cyan-500'><span className='cursor-pointer'><NavLink to="/forgotpassword" >Forgot password?</NavLink></span></p>
                        </div>

                    </form>

                    <div >
                        <p className='text-sm border-2 w-80 mt-2 text-center py-4'>Don't have an account? <span className='text-sky-800 hover:text-cyan-500 cursor-pointer'><NavLink to="/signup">Sign up</NavLink></span></p>
                        <p className='text-center text-xs w-80 py-4'>Get the app</p>

                        <div className='w-80 flex justify-center'>
                            <img src={googleplay} alt="googleplay" className='w-32 rounded cursor-pointer' />
                            <img src={microsoft} alt="microsoft" className='w-28 ms-2 cursor-pointer' />
                        </div>
                    </div>
                </div>



            </div>

            <Footer />

        </div>

    );
}

export default LoginPage;
