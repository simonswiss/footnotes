import { reader } from '../reader'

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params

  const post = await reader.collections.posts.read(slug)

  if (!post) return <div>Post not found!</div>

  return (
    <div>
      <h1>{post.title}</h1>
      <div>
        <pre>{JSON.stringify(await post.content(), null, 2)}</pre>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list()

  return slugs.map((slug) => ({
    slug,
  }))
}
