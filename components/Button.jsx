import React, { useEffect, useRef, useState } from 'react'
import styles from './Button.module.sass'

const Button = ({ text, variant, disableShadow, disabled, startIcon, endIcon, size, color, icon }) => {
  const [btnStyle, setBtnStyle] = useState('')
  const button = useRef(null)
  useEffect(() => {
    if (variant === undefined) {
      setBtnStyle('')
    }
    if (variant === 'outline') {
      setBtnStyle(prevState => styles.btn__outline + ' ' + prevState)
    }
    if (variant === 'text') {
      setBtnStyle(prevState => styles.btn__text + ' ' + prevState)
    }
    if (color === 'default') {
      setBtnStyle('')
    }
    if (color === 'primary') {
      setBtnStyle(prevState => styles.btn__primary + ' ' + prevState)
    }
    if (color === 'secondary') {
      setBtnStyle(prevState => styles.btn__secondary + ' ' + prevState)
    }
    if (color === 'danger') {
      setBtnStyle(prevState => styles.btn__danger + ' ' + prevState)
    }
    if (size === 'sm') {
      setBtnStyle(prevState => styles.btn__sm + ' ' + prevState)
    }
    if (size === 'md') {
      setBtnStyle(prevState => styles.btn__md + ' ' + prevState)
    }
    if (size === 'lg') {
      setBtnStyle(prevState => styles.btn__lg + ' ' + prevState)
    }
    if (disableShadow === true) {
      setBtnStyle(styles.btn__disableShadow)
    }
    if (disabled === true) {
      button.current.disabled = true
      setBtnStyle(styles.btn__disabled)
    }
    if (disabled === true && variant === 'text') {
      button.current.disabled = true
      setBtnStyle(`${styles.btn__textdisabled}`)
    }
    if (startIcon === 'local_grocery_store') {
      button.current.innerHTML = `${icon} ${text}`
      setBtnStyle(styles.btn__store)
    }
    if (endIcon === 'local_grocery_store') {
      button.current.innerHTML = `${text} ${icon}`
      setBtnStyle(styles.btn__store)
    }
  }, [])

  return (
    <>
      <button ref={button} className={`${styles.btn} ${btnStyle}`}>{text}</button>
    </>
  )
}

export default Button
