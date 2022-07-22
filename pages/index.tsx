import Head from 'next/head'
import { client } from '../libs/client'
import Profile from './profile/profile'
import type { Article } from '../types/article'
import type { Category } from '../types/category'
import ArticlesList from './articles-list/articles-list'
import CategoriesList from './categories-list/categories-list'

type Props = {
  articles?: Array<Article>
  categories?: Array<Category>
}

export default function Home({ articles, categories }: Props) {
  return (
    <main className="w-4/5 mx-auto flex-grow">
      <Head>
        <title>Home | tanukizzan</title>
        <meta name="description" content="たぬきっつぁんです。ブロガー的なプログラマー的な人です。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
      <ArticlesList articles={articles} />
    </main>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'articles' });
  const categoryData = await client.get({ endpoint: "categories" });
  return {
    props: {
      articles: data.contents,
      categories: categoryData.contents,
    }
  }
}