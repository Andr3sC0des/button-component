import React from 'react'
import MenuElements from './MenuElements'
import styles from './Sidebar.module.sass'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <section className={styles.sidebar}>
        <Link href='/' className={styles.sidebar__title}>Dev<span>challenges.io</span></Link>
        <ul className={styles.menu}>
          <MenuElements />
        </ul>
      </section>
    </>
  )
}

export default Sidebar
