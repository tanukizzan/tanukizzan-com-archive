import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export type Link = {
  title: string
  url: string
  icon: string
}

export const linkBtn: Link[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/tanukizzan',
    icon: '/images/icons/github.svg',
  },
  {
    title: 'Qiita',
    url: 'https://qiita.com/Tanukizzan',
    icon: '/images/icons/qiita.png',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/tanukizzan',
    icon: '/images/icons/twitter.svg',
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/channel/UCb4HwLN4NNHs3sL7FGVLbOw',
    icon: '/images/icons/youtube.svg',
  },
  {
    title: 'SoundCloud',
    url: 'https://soundcloud.com/tanukizzan',
    icon: '/images/icons/soundcloud.svg',
  },
  {
    title: 'Blog',
    url: 'https://blog.tanukizzan.com',
    icon: '/images/icons/blogger.svg',
  },
  {
    title: 'note',
    url: 'https://note.com/tanukizzan',
    icon: '/images/icons/note.svg',
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <h2 className="home-h2">
        Links
      </h2>
      <div className={`mx-auto my-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 gap-5`}>
        {
          linkBtn.map((link: Link) => (
            <Link href={link.url} key={link.title}>
              <div className={`${styles.iconBtn} ${styles[link.title]}`}>
                <img src={link.icon} alt={link.title} />
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}