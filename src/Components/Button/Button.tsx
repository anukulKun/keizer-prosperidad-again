import React from 'react'
import "../../index.css"
import { Link } from 'react-router-dom'

interface ButtonProps {
    text:string,
    onClick?:()=>void,
    path?:string,
    addStyles?:string
}

const Button : React.FC <ButtonProps>= (props) => {
    const { text,path='#'} = props

    return (
        <button 
            className='w-fit h-auto px-[16px] py-[8px] rounded-[8px] buttonAnimation relative overflow-hidden text-nowrap'
        >
            <Link to={path} className="relative z-10" >{text}</Link>
        </button>
    )
}

export default Button