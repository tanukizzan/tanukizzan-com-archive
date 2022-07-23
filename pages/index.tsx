import Head from 'next/head'
import { client } from '../libs/client'
import Top from './top/top'
import type { Article } from '../types/article'
import type { Category } from '../types/category'
import ArticlesList from './articles-list/articles-list'
import CategoriesList from './categories-list/categories-list'

type Props = {
  articles?: Array<Article>
  categories?: Array<Category>
}

export default function Home({ articles, categories }: Props) {
  const description = "たぬきっつぁんのブログです。ガジェットやWeb開発のことをよく書いています。";
  return (
    <>
      <Head>
        <title>Home | tanukizzan</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content={`https://tanukizzan.com/`} />
        <meta property="og:title" content="Tanukizzan's Blog" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/gadgets.jpg" />
      </Head>
      <Top />
      <main className="w-4/5 mx-auto flex-grow">
        <ArticlesList articles={articles} />
      </main>
    </>
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