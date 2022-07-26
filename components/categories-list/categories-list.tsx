import type { Category } from '../../types/category'
import Link from 'next/link'

type Props = {
  categories?: Array<Category>
}

export default function ArticlesList({ categories }: Props) {
  return (
    <div className="articles-list">
      <h2 className="home-h2">
        Categories
      </h2>
      <ul>
        {categories && categories.map(category => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`} passHref>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}