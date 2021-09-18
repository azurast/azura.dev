import fs from "fs"
import matter from "gray-matter"
import path, { join } from "path"
import readingTime from "reading-time"
import { serialize } from "next-mdx-remote/serialize";
import MDXComponents from "../components/MDXComponents";
import mdxPrism from "mdx-prism";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeImageSize from "rehype-image-size";
import remarkCodeTitles from  "remark-code-titles";


const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(join(process.cwd(), 'data', type));
}

export async function getFileBySlug(type, slug) {

  const source = slug
    ? fs.readFileSync(join(process.cwd(), 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(join(process.cwd(), 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source)

  const mdxSource = await serialize(content, {
    component: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkCodeTitles
      ],
      rehypePlugins: [
        mdxPrism,
        rehypeSlug,
        rehypeAutolinkHeadings,
        [rehypeImageSize, { dir: "public" }]
      ]
    }
  })

  return {
    source: mdxSource,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...data
    }
  }
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ]
  }, [])
}