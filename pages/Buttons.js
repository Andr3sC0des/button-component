import Button from '@components/Button'
import React from 'react'
import styles from './Buttons.module.sass'

const Buttons = () => {
  const icons = {
    addcart: '<span class="material-symbols-outlined">add_shopping_cart</span>',
    home: '<span class="material-symbols-outlined">home</span>',
    js: '<span class="material-symbols-outlined">javascript</span>',
    star: '<span class="material-symbols-outlined">star</span>',
    like: '<span class="material-symbols-outlined">star</span>'
  }
  return (
    <>
      <section className={styles.buttons}>
        <h1 className={styles.buttons__title}>Buttons</h1>

        <section className={styles.components}>
          <article className={styles.btn}>
            <span className={styles.btn__title}>{'<Button />'}</span>
            <div className={styles.btn__component}>
              <Button text='Default' />
            </div>
          </article>

          <article className={styles.btn}>
            <span className={styles.btn__title}>{'<Button variant="outline" />'}</span>
            <div className={styles.btn__component}>
              <Button variant='outline' text='Default' />
            </div>
          </article>

          <article className={styles.btn}>
            <span className={styles.btn__title}>{'<Button variant="text" />'}</span>
            <div className={styles.btn__component}>
              <Button variant='text' text='Default' />
            </div>
          </article>

          <article className={styles.btn}>
            <span className={styles.btn__title}>{'<Button disableShadow />'}</span>
            <div className={styles.btn__component}>
              <Button disableShadow text='Default' />
            </div>
          </article>

          <section className={styles.col3}>
            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button disabled />'}</span>
              <div className={styles.btn__component}>
                <Button disabled text='Default' />
              </div>
            </article>

            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button variant="text" disabled />'}</span>
              <div className={styles.btn__component}>
                <Button disabled variant='text' text='Default' />
              </div>
            </article>
          </section>

          <section className={styles.col2}>
            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button startIcon="local_grocery_store" />'}</span>
              <div className={styles.btn__component}>
                <Button icon={icons.home} startIcon='local_grocery_store' text='Default' />
              </div>
            </article>

            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button endIcon="local_grocery_store" />'}</span>
              <div className={styles.btn__component}>
                <Button icon={icons.addcart} endIcon='local_grocery_store' text='Default' />
              </div>
            </article>
          </section>

          <section className={styles.col4}>
            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button size="sm" />'}</span>
              <div className={styles.btn__component}>
                <Button size='sm' text='Default' />
              </div>
            </article>

            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button size="md" />'}</span>
              <div className={styles.btn__component}>
                <Button size='md' text='Default' />
              </div>
            </article>

            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button size="lg" />'}</span>
              <div className={styles.btn__component}>
                <Button size='lg' text='Default' />
              </div>
            </article>
          </section>

          <section className={styles.col4}>
            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button color="default" />'}</span>
              <div className={styles.btn__component}>
                <Button color='default' text='Default' />
              </div>
            </article>

            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button color="primary" />'}</span>
              <div className={styles.btn__component}>
                <Button color='primary' text='Default' />
              </div>
            </article>

            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button color="secondary" />'}</span>
              <div className={styles.btn__component}>
                <Button color='secondary' text='Default' />
              </div>
            </article>

            <article className={styles.btn}>
              <span className={styles.btn__title}>{'<Button color="danger" />'}</span>
              <div className={styles.btn__component}>
                <Button color='danger' text='Default' />
              </div>
            </article>
          </section>

        </section>

        <span className={styles.icons}>Icons: https://material.io/resources/icons/?style=round</span>
        <span className={styles.createdby}>created by <a href='https://github.com/Andr3sC0des'>andr3sc0des</a> - devChallenges.io</span>
      </section>
    </>
  )
}

export default Buttons
