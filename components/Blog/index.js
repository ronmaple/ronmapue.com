import Link from 'next/link'

const Blog = ({ title, author, coverPhoto }) => {
  return (
    <div className="">
      <Link>
        <div className="">
          <image src={coverPhoto?.url} />
        </div>
      </Link>
    </div>
  )
}

export default Blog
