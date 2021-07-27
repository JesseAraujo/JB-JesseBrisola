
import Head from 'next/head'

import styles from './index.module.scss'

export default function Index() {


  return (
    <>
      <Head>
        <title>JB | Jessé Brisola</title>
        <meta http-equiv="refresh" content="4;url=/App" />
      </Head>


      <div className={styles.container}>
        <img src="/assets/Logo.svg" alt="Logo JB Jessé Brisola" />
      </div>
    </>
  )
}
