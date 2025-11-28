import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Metal_Mania, Merienda } from 'next/font/google'

const metalMania = Metal_Mania({
  subsets: ['latin'],
  variable: '--font-metal',
  weight: '400',
})

const merienda = Merienda({
  subsets: ['latin'],
  variable: '--font-merienda',
})


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className={`${metalMania.variable} ${merienda.variable} font-metal`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
    
  );
}





