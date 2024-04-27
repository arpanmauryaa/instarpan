import React from 'react'

function InputField({ placeholder, marginT, name, value, handleChange, type }) {
    return (
        <>
            <input type={`${type}`}
                name={`${name}`}
                value={value}
                onChange={handleChange}
                className={`${marginT} bg-gray-50 border rounded border-gray-400 text-gray-700 p-2
                    w-full  leading-tight focus:outline-none focus:border-blue-500 text-sm`} placeholder={`${placeholder}`} />
        </>
    )
}

export default InputField