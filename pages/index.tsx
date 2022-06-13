// TODO index.tsx をコンポーネントに分ける
// TODO トップにかんたんなプロフィール載せる
// TODO 記事ページのCSSをつくる（micorCMSのエディタ風のシンプルデザイン）

import { client } from '../libs/client'
import type { Article } from '../types/article'
import Link from 'next/link'

type Props = {
  articles: Array<Article>
}

export default function Home({ articles }: Props) {
  return (
    <main className="w-4/5 mx-auto">
      <div className="profile">
        <h2 className="mx-auto my-8 text-3xl font-bold">
          I'm tanukizzan.
        </h2>
        <p className="leading-loose text-lg">ブロガー的なプログラマー的な人です。</p>
        <p className="leading-loose text-lg">Skills: HTML / CSS / JavaScript / Next.js</p>
        <a href="https://github.com/tanukizzan" className="leading-loose text-blue-500 text-lg hover:underline">GitHub</a>
      </div>
      <div className="articles-list">
        <h2 className="mx-auto my-8 text-3xl font-bold">
          Blog
        </h2>
        <div className="mx-auto my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {articles.map(article => (
            <Link href={`/posts/${article.id}`} passHref>
              <div className="rounded overflow-hidden shadow-lg cursor-pointer" key={article.id}>
                <img
                  className="w-full object-cover aspect-video"
                  src={article.eye_catch.url}
                />
                <div className="p-4 pb-0">
                  <h3 className="text-xl">{article.title}</h3>
                </div>
                <div className="p-4">
                  {article.tag && (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      # {article.tag}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'articles' })
  return {
    props: {
      articles: data.contents,
    }
  }
}