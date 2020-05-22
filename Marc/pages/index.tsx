import Head from 'next/head'
import { API_URL } from '../settings/setting'

export default function Home() {
  console.log(API_URL);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
