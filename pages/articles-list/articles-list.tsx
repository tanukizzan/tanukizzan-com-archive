import type { Article } from '../../types/article'
import Link from 'next/link'

type Props = {
  articles?: Array<Article>
}

export default function ArticlesList({ articles }: Props) {
  return (
    <div className="articles-list">
      <h2 className="home-h2">
        Blog
      </h2>
      <div className="mx-auto my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {articles && articles.map(article => (
          <Link href={`/posts/${article.id}`} passHref key={article.id}>
            <div className="rounded overflow-hidden shadow-lg cursor-pointer">
              <img
                className="w-full object-cover aspect-video"
                src={article.eye_catch.url}
              />
              <div className="p-4 pb-0">
                <h3 className="text-xl">{article.title}</h3>
              </div>
              <div className="p-4">
                {article.tag && (
                  <span className="inline-block font-semibold text-blue-500">
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