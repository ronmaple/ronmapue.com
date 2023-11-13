import { gql } from 'graphql-request'

import client from '../../clients/graphql'
import Link from 'next/link'
import logo from '../../public/RM-logos_black.png'
import Image from 'next/image'
import Card from '../../components/Blog/Card'

const QUERY = gql`
  {
    posts {
      id
      slug
      title
      content {
        html
        markdown
        raw
        text
      }
      coverPhoto {
        url(transformation: { image: { resize: {} } })
      }
      author {
        name
        avatar {
          url
        }
      }
      datePublished
    }
  }
`

export const getStaticProps = async () => {
  const response = await client.request(QUERY)
  const posts = response.posts
  return {
    props: {
      posts,
    },
  }
}

const Blog = ({ posts }) => {
  // TODO: make nav global
  return (
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
        <div>
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Blog Posts
          </h2>
        </div>
        <div className="text-center p-10 flex flex-col justify-between leading-normal">
          {posts.map((post) => {
            return <Card key={post.id} post={post} />
          })}
        </div>
      </section>
    </main>
  )
}

export default Blog
