import { gql } from 'graphql-request'

import client from '../../clients/graphql'
import Link from 'next/link'
import logo from '../../public/RM-logos_black.png'
import Image from 'next/image'

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
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

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`

export const getStaticPaths = async () => {
  const { posts } = await client.request(SLUGLIST)
  return {
    fallback: true,
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug
  const response = await client.request(QUERY, { slug })
  return {
    props: {
      post: response.post,
    },
    revalidate: 60,
  }
}

const BlogPost = ({ post }) => {
  return (
    <div>
      <main className="bg-white px-10">
        <section className="min-h-screen bg-white dark:bg-gray-900">
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
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <Image
              src={post.coverPhoto?.url}
              alt=""
              width={500}
              height={500}
              objectFit="cover"
              className="mx-auto"
            />

            <div className="flex justify-center items-center">
              <div className="max-w-screen-lg text-gray-700 sm:text-lg dark:text-gray-500">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{
                    __html: post.content.html,
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="py-10">
                {/* {post.author?.name && <h6>Author: {post.author?.name}</h6>} */}
                <span className=" mb-4 tracking-tight font-light text-gray-400 dark:text-white">
                  {post.datePublished}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BlogPost
