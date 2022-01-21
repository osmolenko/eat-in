import { SessionProvider } from 'next-auth/react'
import '../styles/reset.scss'
import { useEffect } from 'react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('cart.id')) {
      localStorage.setItem('cart.id', new Date().getTime().toString())
    }
  })

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
