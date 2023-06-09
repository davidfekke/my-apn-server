import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>APN Server</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Send Push Notification
          </p>
        </div>

        <div>
          <form action="/api/form" method="post">
            <label for="devicetoken">token:</label>
            <input type="text" id="devicetoken" name="devicetoken" /><br />
            
            <label for="badge">badge:</label>
            <input type="text" id="badge" name="badge" /><br />

            <label for="sound">sound:</label>
            <input type="text" id="sound" name="sound" /><br />

            <label for="alert">alert:</label>
            <input type="text" id="alert" name="alert" /><br />

            <label for="payload">payload:</label>
            <input type="text" id="payload" name="payload" /><br />

            <label for="topic">bundleid:</label>
            <input type="text" id="topic" name="topic" /><br />

            <button type="submit">Submit</button>
          </form>
        </div>

        
      </main>
    </>
  )
}
