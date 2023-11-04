import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SubmissionsProvider } from '../context/SubmissionsContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SubmissionsProvider>
      <Component {...pageProps} />
    </SubmissionsProvider>
  );
}