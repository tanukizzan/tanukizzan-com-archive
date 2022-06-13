import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="body-font w-4/5 mx-auto">
      <div className="mx-auto my-8 flex flex-wrap flex-col md:flex-row items-center justify-evenly">
        <Link href={'/'} passHref>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className=" text-xl">tanukizzan.com</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center text-base">
          <p>&copy; 2022 tanukizzan</p>
        </nav>
      </div>
    </footer>
  )
}