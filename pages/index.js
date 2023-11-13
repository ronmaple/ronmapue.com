import Head from 'next/head'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import image from '../public/portrait-chilly-chase-run.png'
import logo from '../public/RM-logos_black.png'
import Link from 'next/link'

// TODO: release2? refactor to components
// TODO: cache the assets
const Home = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>ronmapue.com</title>
        <link rel="icon" href="/RM-logos_black_cropped.png" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <Link href="/" passHref>
              <Image
                src={logo}
                className="cursor-pointer w-20 h-auto"
                objectFit="cover"
              />
            </Link>
            <ul className="flex items-center">
              <Link href="/blogs" passHref>
                {/* TODO: style */}
                Blog
              </Link>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/resume_public.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Ron Mapue
            </h2>
            <h3 className="text-2xl py-2">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Experienced full-stack software engineer proficient in React,
              Node.js, and various web technologies, with a passion for creating
              innovative and scalable web applications.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <Link
              href="https://www.linkedin.com/in/ronmapue/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            <Link
              href="https://github.com/ronmaple"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20  overflow-hidden">
            <Image src={image} fill={true} objectFit="cover" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home