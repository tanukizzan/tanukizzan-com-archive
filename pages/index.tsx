import Head from 'next/head'
import Top from '../components/top/top'
import Profile from '../components/profile/profile'
import Works from '../components/works/works'

export default function Home() {
  const title = "たぬきっつぁん | tanukizzan.com"
  const description = "たぬきっつぁんのポートフォリオサイトです。Webで作ったものを載せています。";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content={`https://tanukizzan.com/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://tanukizzan.com/images/gadgets.webp" />
      </Head>
      <Top />
      <main className="w-5/6 mx-auto flex-grow">
        <Profile />
        <Works />
      </main>
    </>
  )
}
