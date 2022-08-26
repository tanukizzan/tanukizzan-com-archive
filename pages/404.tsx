import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found | tanukizzan</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className={`${styles.pad} w-3/4 max-w-3xl m-auto`}>
        <div className={styles.padBtn}></div>
        <img alt="hero" src="/images/404sakura.webp" className={styles.padImg} />
        <div className={styles.topText}>
          <div className={styles.topTextContent}>
            <h1>404 Not Found</h1>
            <p>ページは存在しません。</p>
            <button className="text-blue-600"><a href="/">ホームに戻る</a></button>
          </div>
        </div>
      </div>
    </>
  )
}