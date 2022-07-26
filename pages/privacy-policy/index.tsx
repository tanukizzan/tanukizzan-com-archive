import Head from 'next/head'
import styles from '../../styles/Article.module.css'

export default function Custom404() {
  const pageTitle = "プライバシーポリシー";
  return (
    <div className={`${styles.article} w-3/4 max-w-3xl mx-auto mb-24`}>
      <Head>
        <title>{pageTitle} | tanukizzan</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className={styles.title}>{pageTitle}</h1>
      <h2>Cookieの使用について</h2>
      <p>当サイトでは、アクセス解析のためにCookieを使用しています。</p>
      <p>Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。</p>
      <p>Cookieの使用を望まない場合、ブラウザからCookieを無効に設定することができます。</p>
      <h2>アクセス解析ツールについて</h2>
      <p>tanukizzan.com（以下、当サイト）では、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。トラフィックデータの収集のためにクッキー（Cookie）を使用しておりますが、匿名で収集されており、個人を特定するものではありません。</p>
      <p>Googleアナリティクスでデータが収集・処理される仕組みの詳細については<a href="https://policies.google.com/technologies/partner-sites?hl=ja">こちら</a>をご覧ください。</p>
      <h2>免責事項</h2>
      <p>当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。</p>
      <p>また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっている場合があります。</p>
      <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
      <h2>著作権について</h2>
      <p>当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。</p>
      <p>また当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、<a href="mailto:tanukizzan@outlook.com">tanukizzan@outlook.com</a> までご連絡ください。迅速に対応いたします。</p>
      <h2>リンクについて</h2>
      <p>当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。</p>
      <p>ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
      <hr/>
      <p>2022年7月26日 制定</p>
      <p>Tanukizzan Blog<br/>たぬきっつぁん</p>
    </div>
  )
}