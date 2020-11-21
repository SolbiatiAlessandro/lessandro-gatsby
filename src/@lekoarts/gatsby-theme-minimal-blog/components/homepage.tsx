/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"

const HomepageFooter = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        justifyContent: `space-between`,
        mt: [8],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
      }}
	>
	  <div>The floating objects are a simulation of the <a href='https://en.wikipedia.org/wiki/Three-body_problem'>Three Body Problem</a> written in the Lisp dialect <a href='https://clojurescript.org/'>ClojureScript</a>, you can <b><a href='https://raw.githubusercontent.com/SolbiatiAlessandro/three-body/master/src/three_body/core.cljs'>read the code here</a></b>.
	  </div>
    </footer>
  )
}

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  console.log(posts)
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
	<Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 2], mt: 2 }, variant: `section_hero` }}>
        <Hero />
	  </section>
	  <HomepageFooter />
	</Layout>
  )
}

export default Homepage
