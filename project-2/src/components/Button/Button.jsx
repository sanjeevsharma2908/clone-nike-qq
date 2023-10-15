import React from 'react'
import styles from './Button.module.css';
import {MdOutlineMessage} from 'react-icons/md';

const Button = ({isOutline,icon,text, ...rest}) => {
   // console.log(props)
  return (

    <button  
    className={isOutline ? styles.outline_btn:styles.primary_btn}>
            {icon}
         {text}
    </button>
    
  )
}

export default Button