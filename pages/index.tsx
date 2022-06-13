// TODO index.tsx をコンポーネントに分ける
// TODO 記事ページのCSSをつくる（micorCMSのエディタ風のシンプルデザイン）

import Profile from './profile/profile'
import ArticlesList from './articles-list/articles-list'

export default function Home() {
  return (
    <main className="w-4/5 mx-auto">
      <Profile />
      <ArticlesList />
    </main>
  )
}
