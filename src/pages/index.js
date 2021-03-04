import * as React from "react"
import { graphql} from 'gatsby'
import Layout from '../components/layout'
import SliceZone from '../components/sliceZone'

export const query = graphql`
  {
    prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero {
              type
              label
              primary {
                hero_content
                hero_title
                background_image
              }
            }
            ... on PRISMIC_HomepageBodyCalltoaction_grid {
              type
              primary {
                section_title
              }
              fields {
                button_destination {
                  ... on PRISMIC_Page {
                    page_title
                    content
                    _meta {
                      uid
                    }
                  }
                }
                featured_image
                content
                call_to_action_title
                button_label
              }
            }
          }
        }
      }
    }
  }
  }
`

// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      <SliceZone body={data.prismic.allHomepages.edges[0].node.body} />
    </Layout>
  )
}

export default IndexPage
