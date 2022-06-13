import { client } from '../../libs/client'
import type { Article } from '../../types/article'
import Link from 'next/link'

type Props = {
  articles: Array<Article>
}

export default function ArticlesList({ articles }: Props) {
  return (
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