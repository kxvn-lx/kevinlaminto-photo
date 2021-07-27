import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ScrollToTop from '../components/scrollToTop'
import Image from '../components/image'

function IndexPage({ data }) {
    const images = data.allCloudinaryMedia.edges

    return (
        <Layout>
            <SEO title="Home" />
            <ScrollToTop />
            <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {images.map((image, index) => {
                    return (
                        <Image
                            key={index}
                            src={image.node.secure_url}
                            alt={index}
                            className="kl-layout-item"
                        />
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
    query IndexPageQuery {
        allCloudinaryMedia(filter: { tags: { in: ["main"] } }) {
            edges {
                node {
                    tags
                    secure_url
                }
            }
        }
    }
`

export default IndexPage
