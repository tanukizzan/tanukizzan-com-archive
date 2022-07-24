import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="body-font">
      <div className="mx-auto my-8 flex flex-wrap flex-col md:flex-row items-center justify-center">
        <Link href={'/'} passHref>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/images/profile.png" alt="tanukizzan" width={40} height={40} className="rounded-full" />
            <span className="ml-3 text-2xl">tanukizzan</span>
          </a>
        </Link>
      </div>
    </header>
  )
}