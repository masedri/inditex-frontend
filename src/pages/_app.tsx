import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PodcastProvider } from '@/features/podcast/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PodcastProvider>
      <Component {...pageProps} />
    </PodcastProvider>
  )
}
