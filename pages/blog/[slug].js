import { getFiles, getFileBySlug } from "../../lib/mdx"
import BlogLayout from "../../layouts/blog"
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from "../../components/MDXComponents";

export default function Blog({ source, frontMatter }) {
  return(
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={{...MDXComponents}}/>
    </BlogLayout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug)

  return { props: post }
}