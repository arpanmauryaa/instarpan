import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../components/loginsignup/LoginPage'
import SignUp from '../components/loginsignup/SignUp'
import ForgotPassword from '../components/loginsignup/ForgotPassword'




function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing