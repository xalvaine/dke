import '@/app/globals.css'
import type { AppProps } from 'next/app'
import { Geologica } from 'next/font/google'

const geologica = Geologica({
  weight: ['300', '400', '700'],
  subsets: ['latin', 'cyrillic'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={geologica.className}>
      <Component {...pageProps} />
    </div>
  )
}

