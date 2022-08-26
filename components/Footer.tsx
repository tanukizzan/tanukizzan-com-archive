import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="body-font w-4/5 mx-auto">
      <div className="mx-auto my-8 flex flex-wrap flex-col md:flex-row items-center justify-around">
        <Link href={'/'} passHref>
          <a className="flex items-center text-base">
            <span className="text-lg my-4">&copy; 2022 tanukizzan</span>
          </a>
        </Link>
      </div>
    </footer>
  )
}