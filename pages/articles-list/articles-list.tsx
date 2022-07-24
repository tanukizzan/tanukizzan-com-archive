import Link from 'next/link'
import type { Article } from '../../types/article'
import Date from '../../components/Date';
import { BiTime } from 'react-icons/bi';
import { BiCategory } from 'react-icons/bi';
import styles from '../../styles/Home.module.css'

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
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={article.eye_catch.url} alt={article.title} />
              </div>
              <div className={styles.cardText}>
                <h3 className="p-4 pb-0 text-xl font-semibold">{article.title}</h3>
                <div className="p-4 pt-2 flex flex-col">
                  {article.publishedAt && (
                    <p className="flex items-center text-blue-600">
                      <BiTime />
                      <span className="ml-1"><Date dateString={article.publishedAt} /></span>
                    </p>
                  )}
                  {article.category && (
                    <p className="flex items-center text-blue-600">
                      <BiCategory />
                      <span className="ml-1">{article.category.name}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}