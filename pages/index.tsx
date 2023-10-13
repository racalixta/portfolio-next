import Head from 'next/head'
import { HomePage } from '../src/pages/Home'


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <link rel="icon" href="/favicon.jpg" sizes="any" />
      </Head>
      
      <HomePage />
    </>
  )
}
