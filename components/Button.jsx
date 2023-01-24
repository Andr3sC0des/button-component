import React, { useEffect, useRef, useState } from 'react'
import styles from './Button.module.sass'

const Button = ({ text, variant, disableShadow, disabled, startIcon, endIcon, size, color, icon }) => {
  const [btnStyle, setBtnStyle] = useState('')
  const button = useRef(null)

  useEffect(() => {
    variant === undefined ? setBtnStyle('') : null // eslint-disable-line
    variant === 'outline' ? setBtnStyle(prevState => styles.btn__outline + ' ' + prevState) : null // eslint-disable-line
    variant === 'text' ? setBtnStyle(prevState => styles.btn__text + ' ' + prevState) : null // eslint-disable-line
    color === 'default' ? setBtnStyle('') : null // eslint-disable-line
    color === 'primary' ? setBtnStyle(prevState => styles.btn__primary + ' ' + prevState) : null // eslint-disable-line
    color === 'secondary' ? setBtnStyle(prevState => styles.btn__secondary + ' ' + prevState) : null // eslint-disable-line
    color === 'danger' ? setBtnStyle(prevState => styles.btn__danger + ' ' + prevState) : null // eslint-disable-line
    size === 'sm' ? setBtnStyle(prevState => styles.btn__sm + ' ' + prevState) : null // eslint-disable-line
    size === 'md' ? setBtnStyle(prevState => styles.btn__md + ' ' + prevState) : null // eslint-disable-line
    size === 'lg' ? setBtnStyle(prevState => styles.btn__lg + ' ' + prevState) : null // eslint-disable-line
    disableShadow ? setBtnStyle(styles.btn__disableShadow) : null // eslint-disable-line
    disabled === true ? (button.current.disabled = true, setBtnStyle(styles.btn__disabled)) : null; // eslint-disable-line
    disabled === true && variant === 'text' ? (button.current.disabled = true,setBtnStyle(`${styles.btn__textdisabled}`)) : null // eslint-disable-line
    startIcon === 'local_grocery_store' ? (button.current.innerHTML = `${icon} ${text}`, setBtnStyle(styles.btn__store)) : null // eslint-disable-line
    endIcon === 'local_grocery_store' ? (button.current.innerHTML = `${text} ${icon}`, setBtnStyle(styles.btn__store)) : null // eslint-disable-line
  }, []) // eslint-disable-line

  return (
    <>
      <button ref={button} className={`${styles.btn} ${btnStyle}`}>{text}</button>
    </>
  )
}

export default Button
