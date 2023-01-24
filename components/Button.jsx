import React, { useEffect, useRef, useState } from 'react'
import styles from './Button.module.sass'

const Button = ({ text, variant, disableShadow, disabled, startIcon, endIcon, size, color, icon }) => {
  const [btnStyle, setBtnStyle] = useState('')
  const button = useRef(null)

  useEffect(() => {
    variant === undefined ? setBtnStyle('') : null
    variant === 'outline' ? setBtnStyle(prevState => styles.btn__outline + ' ' + prevState) : null
    variant === 'text' ? setBtnStyle(prevState => styles.btn__text + ' ' + prevState) : null
    color === 'default' ? setBtnStyle('') : null
    color === 'primary' ? setBtnStyle(prevState => styles.btn__primary + ' ' + prevState) : null
    color === 'secondary' ? setBtnStyle(prevState => styles.btn__secondary + ' ' + prevState) : null
    color === 'danger' ? setBtnStyle(prevState => styles.btn__danger + ' ' + prevState) : null
    size === 'sm' ? setBtnStyle(prevState => styles.btn__sm + ' ' + prevState) : null
    size === 'md' ? setBtnStyle(prevState => styles.btn__md + ' ' + prevState) : null
    size === 'lg' ? setBtnStyle(prevState => styles.btn__lg + ' ' + prevState) : null
    disableShadow ? setBtnStyle(styles.btn__disableShadow) : null
    disabled === true ? (button.current.disabled = true, setBtnStyle(styles.btn__disabled)) : null;
    disabled === true && variant === 'text' ? (button.current.disabled = true,setBtnStyle(`${styles.btn__textdisabled}`)) : null
    startIcon === 'local_grocery_store' ? (button.current.innerHTML = `${icon} ${text}`, setBtnStyle(styles.btn__store)) : null
    endIcon === 'local_grocery_store' ? (button.current.innerHTML = `${text} ${icon}`, setBtnStyle(styles.btn__store)) : null
  }, [])

  return (
    <>
      <button ref={button} className={`${styles.btn} ${btnStyle}`}>{text}</button>
    </>
  )
}

export default Button
