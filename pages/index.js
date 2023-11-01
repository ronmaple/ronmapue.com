import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ron's website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">ronmapue</h1>
            {/* <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul> */}
          </nav>
          <div className="flex flex-col">
            <div>
              <h1>
                Site under construction In the meantime, here are my socials:
              </h1>
            </div>
            <div>
              <ul>
                <li className='py-5'>
                  <a
                    href="https://www.linkedin.com/in/ronmapue/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ronmaple"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
