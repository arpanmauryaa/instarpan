import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'

function ForgotPassword() {
    const [getData, setGetData] = useState()

    const [postData, setPostData] = useState({
        brand: "",
        category: "",
        description: "",
        discountPercentage: "",
    })

    const handleChange2 = (e) => {
        setPostData((oldData => ({ ...oldData, [e.target.name]: e.target.value })))
    }

    const getDataF = async () => {
        await axios('https://dummyjson.com/products')
            .then((res => {
                const data = res.data.products
                console.log(data, 'data')
                setGetData(data)
            }))
            .catch(error => {
                console.log('error :', error)
            })
    }


    useEffect(() => {
        getDataF()
    }, [])


    const handleSubmit2 = async(event) => {
        event.preventDefault()
        await axios.post('https://dummyjson.com/products',postData)
            .then((res => {
                console.log(res, 'Sucess')
            
            }))
            .catch(error => {
                console.log('error :', error)
            })
    }

    const refElement = useRef('')
    const [data, setData] = useState('')

    const handleChange = (e) => {
        setData(e.target.value)
    }


    const handleSubmit = () => {
        console.log('hii')
        // refElement.current.focus()
        refElement.current.style.color = "blue"
    }

    

    return (
        <>
            <div>
                <input ref={refElement} type="text" name='data' value={data} onChange={handleChange} className="border" />
                <button onClick={handleSubmit}>Reset</button>
            </div>


            <form onSubmit={handleSubmit2}>

                <input type='text' name='brand' value={postData.brand} onChange={handleChange2} className='border' />

                <input type='text' name='category' value={postData.category} onChange={handleChange2} className='border' />

                <input type='text' name='description' value={postData.description} onChange={handleChange2} className='border' />

                <input type='text' name='discountPercentage' value={postData.discountPercentage} onChange={handleChange2} className='border' />

                <input type='submit' value="Submit" className='cursor-pointer' />
            </form>




            <table>
                <tr>
                    <th>brand</th>
                    <th>category</th>
                    <th>description</th>
                    <th>discountPercentage</th>
                    <th>Action</th>
                </tr>
                {
                    getData?.map((item => {
                        return (
                            <tr>
                                <td>{item.brand}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td>{item.discountPercentage}</td>
                                <td>Delete</td>
                            </tr>
                        )
                    }))
                }
            </table>

        </>
    )
}

export default ForgotPassword
