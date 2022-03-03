import { getFiles, getFileBySlug } from "../../lib/mdx"
import SnippetLayout from "../../layouts/snippet";
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from "../../components/MDXComponents";

export default function Project({ source, frontMatter }) {
  return (
    <SnippetLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={{...MDXComponents}}/>
    </SnippetLayout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('snippets')

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
  const post = await getFileBySlug('snippets', params.slug)

  return { props: post }
}