import React from 'react'

function Button1({buttonName , bgColor , type , bgHover}) {
  return (
    <>
 <button type={`${type}`} className={`${bgColor} ${bgHover} border w-full text-sm py-1 rounded mt-5  text-white`}>{buttonName}</button>

    </>
  )
}

export default Button1