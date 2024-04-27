import React, { useState } from 'react'
import { VscLock } from "react-icons/vsc";
import InputField from '../../globalcomponents/InputField';
import CustomButton from '../../globalcomponents/CustomButton';
import Footer from '../../globalcomponents/Footer';
import { NavLink } from 'react-router-dom';
import Button1 from '../../globalcomponents/Button1';



function ForgotPassword() {
    const [PhoneEmailUser , setPhoneEmailUser] = useState('')
    const handleChange = (e) =>{
        setPhoneEmailUser(e.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(PhoneEmailUser,'PhoneEmailUser')
    }
    return (
        <>

            <p className=' ps-7 text-2xl font-bold instarpan  py-3'>Instarpan</p>
            <hr className=" bg-gray-100" />

            <div className=' justify-center flex mt-7'>
                <form onSubmit={handleSubmit} className='mt-5 w-96 border rounded'>
                    <div className='p-8'>
                        <div className='flex justify-center'>
                            <div className='border-2 border-black rounded-full p-4'>
                                <VscLock className='text-6xl' />
                            </div>
                        </div>
                        <div className='text-center mt-4'>
                            <p className='font-medium'>Trouble logging in?</p>
                            <p className='text-sm text-gray-500 mt-1.5'>Enter your email address, phone number or username, and we'll send you a link to get back into your account.</p>
                        </div>

                        <InputField
                            type='text'
                            name='PhoneEmailUser'
                            value={PhoneEmailUser}
                            handleChange={handleChange}
                            placeholder='Email, Phone, or Username' marginT='mt-3' />

                        {/* <CustomButton buttonName='Send login link' marginT='mt-4' /> */}
                        <Button1 buttonName='Send login link' bgColor='bg-sky-600' bgHover='hover:bg-sky-500' />


                        <p className='cursor-pointer text-xs text-center mt-3'>Can't reset your password? </p>



                        <div className="flex items-center pt-4 pb-4">
                            <div className="flex-1 mr-4">
                                <hr className="h-0.5 bg-gray-300" />
                            </div>
                            <div className="text-gray-500 text-sm">OR</div>
                            <div className="flex-1 ml-4">
                                <hr className="h-0.5 bg-gray-300" />
                            </div>
                        </div>

                        <p className='font-medium text-sm text-center cursor-pointer hover:text-gray-400'><NavLink to='/signup'>Create new account</NavLink></p>

                    </div>
                    <p className='font-medium text-sm text-center cursor-pointer hover:text-gray-400 border py-2 mt-10'><NavLink to='/'>Back to login</NavLink></p>
                </form>


            </div>

            <Footer />

        </>
    )
}

export default ForgotPassword






































// import axios from 'axios'
// import React, { useState, useRef, useEffect } from 'react'

// function ForgotPassword() {
//     const [getData, setGetData] = useState()
//     const [updateId, setUpdateId] = useState()

//     const [postData, setPostData] = useState({
//         brand: "",
//         category: "",
//         description: "",
//         discountPercentage: "",
//     })

//     const handleChange2 = (e) => {
//         setPostData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault()
//         const getData = JSON.parse(localStorage.getItem("postData")) || [];
//         localStorage.setItem("postData", JSON.stringify([postData, ...getData]));
//         const getData2 = JSON.parse(localStorage.getItem("postData"))
//         setGetData(getData2)
//         // localStorage.removeItem("postData");
//     }

//     const getDataFunction = () => {
//         const data = JSON.parse(localStorage.getItem("postData"))
//         console.log(data, 'asddfssgfkd')
//         setGetData(data)
//     }

//     const deleteData = (id) => {
//         console.log(id, 'index')
//         const filterData = getData.filter(((item, index) => index !== id))
//         localStorage.setItem("postData", JSON.stringify(filterData));
//         setGetData(filterData)
//     }

//     const etitData = (item, id2) => {
//         console.log(id2, 'id2')
//         setPostData({
//             brand: item.brand,
//             category: item.category,
//             description: item.description,
//             discountPercentage: item.discountPercentage,
//         })
//         setUpdateId(id2)
//     }

//     const updateData = () => {
//         console.log(updateId, 'updateId')
//         // console.log(getData,'getData2')
//         getData.splice(updateId, 1, postData)
//         console.log(updateData, 'updateData')
//         localStorage.setItem("postData", JSON.stringify(getData));

//     }

//     useEffect(() => {
//         getDataFunction();
//     }, [])



//     const refElement = useRef('')
//     const [data, setData] = useState('')

//     const handleChange = (e) => {
//         setData(e.target.value)
//     }


//     const useRefSubmit = () => {
//         console.log('hii')
//         // refElement.current.focus()
//         refElement.current.style.color = "blue"
//     }



//     return (
//         <>
//             <div>
//                 <input ref={refElement} type="text" name='data' value={data} onChange={handleChange} className="border" />
//                 <button onClick={useRefSubmit}>Reset</button>
//             </div>


//             <form onSubmit={handleSubmit}>

//                 <input type='text' name='brand' value={postData.brand} onChange={handleChange2} placeholder='Brand' className='border' />

//                 <input type='text' name='category' value={postData.category} onChange={handleChange2} placeholder='category' className='border' />

//                 <input type='text' name='description' value={postData.description} onChange={handleChange2} placeholder='description' className='border' />

//                 <input type='text' name='discountPercentage' value={postData.discountPercentage} onChange={handleChange2} placeholder='discountPercentage' className='border' />

//                 <input type='submit' value="Submit" className='cursor-pointer' />

//                 <input type='button' onClick={updateData} value="Update" className='cursor-pointer ms-10' />
//             </form>




//             <table>
//                 <tr>
//                     <th>brand</th>
//                     <th>category</th>
//                     <th>description</th>
//                     <th>discountPercentage</th>
//                     <th>Action</th>
//                 </tr>
//                 {
//                     getData?.map((item, index) => {
//                         return (
//                             <tr>
//                                 <td>{item.brand}</td>
//                                 <td>{item.category}</td>
//                                 <td>{item.description}</td>
//                                 <td>{item.discountPercentage}</td>
//                                 <div>
//                                     <td onClick={() => deleteData(index)} className='cursor-pointer'>Delete</td>
//                                     <td onClick={() => etitData(item, index)} className='cursor-pointer ms-5'>Edit</td>
//                                 </div>
//                             </tr>
//                         )
//                     })
//                 }
//             </table>

//         </>
//     )
// }

// export default ForgotPassword
