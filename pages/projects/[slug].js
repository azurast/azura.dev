import { getFiles, getFileBySlug } from "../../lib/mdx"
import ProjectLayout from "../../layouts/project";
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from "../../components/MDXComponents";

export default function Project({ source, frontMatter }) {
  return (
    <ProjectLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={{...MDXComponents}}/>
    </ProjectLayout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('projects')

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
  const post = await getFileBySlug('projects', params.slug)

  return { props: post }
}