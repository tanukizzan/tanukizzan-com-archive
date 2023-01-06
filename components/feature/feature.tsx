import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export type FeatureItem = {
  id: number
  title: string
  image: string
  url: string
  summary: React.ReactNode
}

export const FeatureCard: FeatureItem[] = [
  {
    id: 0,
    title: 'Ultimate search',
    image: '/images/works/ultimate-card.webp',
    url: 'https://app.tanukizzan.com/ultimate-search/',
    summary: '普段よく使うサイトを1つの検索バーで検索できるサイトです。よく検索するキーワードを登録してすばやく検索することもできます。その他の〇〇searchの機能をほぼ全て実装しています。'
  },
  {
    id: 1,
    title: 'エヴァンゲリオン風フォントジェネレーター',
    image: '/images/works/eva-card.webp',
    url: 'https://app.tanukizzan.com/eva-font/',
    summary: 'エヴァンゲリオン風のフォントを作って遊べるサイトです。「エヴァ風 フォント」「エヴァ フォント フリー」などの検索ワードでGoogle検索1位にランクインしています。（2023年1月現在）'
  },
]

export default function Feature() {
  return (
    <div>
      <h2 className="home-h2">Feature</h2>
      <div className={`mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 gap-10`}>
        {
          FeatureCard.map((item: FeatureItem) => (
            <Link href={item.url} key={item.title}>
              <div key={item.id} className={styles.feature}>
                <div className={styles.featureImg}>
                  <img src={item.image} alt={item.title} width="512" height="512" loading="lazy" />
                </div>
                <div className={styles.featureText}>
                  <p className='font-bold text-xl text-center'>{item.title}</p>
                  <p className='text-left'>{item.summary}</p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}