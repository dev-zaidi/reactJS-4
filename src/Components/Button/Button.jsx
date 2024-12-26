import React from 'react'
import styles from './Button.module.css'

const Button = ({text}) => {
  return (
<button type='submit' className={styles.button}>{text}</button>
  )
}

export default Button