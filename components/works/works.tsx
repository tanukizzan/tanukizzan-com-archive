import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export type Item = {
  id: number
  title: string
  image: string
  url: string
}

export const Card: Item[] = [
  {
    id: 0,
    title: 'Ultimate search',
    image: '/images/works/ultimate-card.webp',
    url: 'https://app.tanukizzan.com/ultimate-search/'
  },
  {
    id: 1,
    title: 'GATY search',
    image: '/images/works/gaty-card.webp',
    url: 'https://app.tanukizzan.com/gaty-search/'
  },
  {
    id: 2,
    title: 'HowTo search',
    image: '/images/works/howto-card.webp',
    url: 'https://app.tanukizzan.com/howto-search/'
  },
  {
    id: 3,
    title: 'HashTag search',
    image: '/images/works/hashtag-card.webp',
    url: 'https://app.tanukizzan.com/hashtag-search/'
  },
  {
    id: 4,
    title: 'Simple search',
    image: '/images/works/simple-card.webp',
    url: 'https://app.tanukizzan.com/simple-search/'
  },
  {
    id: 5,
    title: 'AI風アシスタント',
    image: '/images/works/assistant-card.webp',
    url: 'https://app.tanukizzan.com/assistant/'
  },
  {
    id: 6,
    title: 'オウム・ガエシくん',
    image: '/images/works/text-talk-card.webp',
    url: 'https://app.tanukizzan.com/text-talk/'
  },
  {
    id: 7,
    title: 'Music Start!',
    image: '/images/works/music-start-card.webp',
    url: 'https://app.tanukizzan.com/music-start/'
  },
  {
    id: 8,
    title: 'douze -12-',
    image: '/images/works/douze-card.webp',
    url: 'https://app.tanukizzan.com/douze/'
  },
  {
    id: 9,
    title: '除夜の鐘',
    image: '/images/works/joya-card.webp',
    url: 'https://app.tanukizzan.com/joya/'
  },
  {
    id: 10,
    title: '縦書き巻物風サイト',
    image: '/images/works/tategaki-card.webp',
    url: 'https://app.tanukizzan.com/vertical-writing/'
  },
  {
    id: 11,
    title: 'あのロゴジェネレーター',
    image: '/images/works/logo-gene-card.webp',
    url: 'https://app.tanukizzan.com/logo-generator/'
  },
  {
    id: 12,
    title: 'エヴァンゲリオン風フォントジェネレーター',
    image: '/images/works/eva-card.webp',
    url: 'https://app.tanukizzan.com/eva-font/'
  },
  {
    id: 13,
    title: 'ポモドーロチャイム',
    image: '/images/works/pomodoro-card.webp',
    url: 'https://app.tanukizzan.com/pomodoro/'
  },
  {
    id: 14,
    title: 'ランダムカラーピッカー',
    image: '/images/works/random-card.webp',
    url: 'https://app.tanukizzan.com/random-color/'
  },
]

export default function Works() {
  return (
    <div>
      <h2 className="home-h2">Works</h2>
      <div className={`mx-auto my-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5`}>
        {
          Card.map((item: Item) => (
            <Link href={item.url} key={item.title}>
              <div key={item.id} className={styles.works}>
                <div className={styles.worksImg}>
                  <img src={item.image} alt={item.title} />
                </div>
                <p className='font-bold text-xl'>{item.title}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}