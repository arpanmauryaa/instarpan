import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import LoginPage from '../loginsignup/LoginPage'
import SignUp from '../loginsignup/SignUp'
import ForgotPassword from '../loginsignup/ForgotPassword'

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/forgotpassword" element={<ForgotPassword/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
