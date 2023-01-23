import React from 'react'
import styles from './MenuElements.module.sass'
import Link from 'next/link'

const MenuElements = () => {
  const handleMenu = (e) => {
    const items = document.querySelectorAll('#items a')
    items.forEach(i => {
      i.style.color = '#9e9e9e'
    })
    e.target.style.color = '#000'
  }

  return (
    <>
      <section id='items'>
        <li onClick={handleMenu} className={styles.item}><Link className={styles.anchor} href='/Colors'>Colors</Link></li>
        <li onClick={handleMenu} className={styles.item}><Link className={styles.anchor} href='/Typography'>Typography</Link></li>
        <li onClick={handleMenu} className={styles.item}><Link className={styles.anchor} href='/Spaces'>Spaces</Link></li>
        <li onClick={handleMenu} className={styles.item}><Link className={styles.anchor} href='/Buttons'>Buttons</Link></li>
        <li onClick={handleMenu} className={styles.item}><Link className={styles.anchor} href='/Inputs'>Inputs</Link></li>
        <li onClick={handleMenu} className={styles.item}><Link className={styles.anchor} href='/Grid'>Grid</Link></li>
      </section>
    </>
  )
}

export default MenuElements
