import Sidebar from '@components/Sidebar'
import '../styles/globals.sass'
export default function App ({ Component, pageProps }) {
  return (
    <>

      <Component {...pageProps} />
      <Sidebar />
    </>
  )
}
