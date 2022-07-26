import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found | tanukizzan</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="pad w-3/4 max-w-3xl mx-auto mb-24">
        <div className="padBtn"></div>
        <img alt="hero" src="/images/404sakura.jpg" className={styles.padImg} />
        <div className={styles.topText}>
          <h1>404 Not Found</h1>
          <p className="px-4">お探しのページは見つかりませんでした。</p>
          <a href='/' className="text-blue-600">ホームに戻る</a>
        </div>
      </div>
    </>
  )
}