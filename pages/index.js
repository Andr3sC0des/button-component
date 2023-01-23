import Head from 'next/head'
import Buttons from './Buttons'

export default function Home () {
  return (
    <>
      <Head>
        <title>Button Components</title>
        <meta name='description' content='Created by andr3sc0des' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='devchallenges.png' />
        <link rel='shortcut icon' type='image/x-icon' href='https://devchallenges.io/' />
      </Head>
      <main>
        <Buttons />
      </main>
    </>
  )
}
