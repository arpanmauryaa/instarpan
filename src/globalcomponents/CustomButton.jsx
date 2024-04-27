import React from 'react'

function CustomButton({ buttonName,marginT }) {
    return (
        <>

            <div className={`${marginT}`}>
                <button className={`text-sm text-center bg-blue-500 w-full rounded py-1.5 text-white`}>{buttonName}</button>
            </div>

        </>
    )
}

export default CustomButton