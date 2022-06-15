export type Link = {
  title: string
  url: string
}

export const linkBtn: Link[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/tanukizzan',
  },
  {
    title: 'Qiita',
    url: 'https://qiita.com/Tanukizzan'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/tanukizzan'
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/channel/UCb4HwLN4NNHs3sL7FGVLbOw'
  },
  {
    title: 'SoundCloud',
    url: 'https://soundcloud.com/tanukizzan'
  },
  {
    title: 'note',
    url: 'https://note.com/tanukizzan'
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <h2 className="home-h2">
        I'm tanukizzan.
      </h2>
      <p className="paragraph">ブロガー的なプログラマー的な人です。</p>
      <p className="paragraph">Skills: HTML / CSS / JavaScript / Next.js</p>
      <nav className="flex flex-wrap items-center m-auto lg:m-0">
        {
          linkBtn.map((link: Link) => (
            <a href={link.url} className="paragraph text-blue-500 hover:underline">{link.title}</a>
          )).reduce((prev: JSX.Element, current: JSX.Element): any => [prev, (<span className="paragraph mx-2">/</span>), current])
        }
      </nav>
      <h2 className="home-h2">Works</h2>

    </div>
  )
}