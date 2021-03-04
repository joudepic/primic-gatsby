import React from 'react'
import {graphql} from 'gatsby'
import RichText from '../components/richText'
import Layout from '../components/layout'
import SlinceZone from '../components/sliceZone'
import styled from 'styled-components'

export const query = graphql`
     query MyQuery($id: String) {
  prismic {
    allPages(id: $id) {
      edges {
        node {
          body {
            ... on PRISMIC_PageBodyCalltoaction_grid {
              type
              label
              fields {
                button_label
                call_to_action_title
                content
                featured_image
                button_destination {
                  _linkType
                  ... on PRISMIC_Contact_page {
                    _meta {
                      uid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const PageWrapper = styled.section`
    max-width: 800px;

`

const Page = ({data}) => {

    const page_title = data.prismic.allPages.edges[0].node.page_title
    const content = data.prismic.allPages.edges[0].node.content

    return(
        <Layout>
            <PageWrapper>
            <RichText render={page_title} />
            <RichText render={content} />
            </PageWrapper>
        </Layout>
    )
}

export default Page