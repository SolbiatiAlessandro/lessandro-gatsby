/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
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
	  <div>The floating objects are a simulation of the <a>Three Body Problem</a> written in the Lisp dialect <a>ClojureScript</a>, you can <b><a>read the code here</a></b>.
	  </div>
    </footer>
  )
}

export default Footer
