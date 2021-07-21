import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ScrollToTop from '../components/scrollToTop'

function IndexPage({ data }) {
    const images = data.allCloudinaryMedia.edges

    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Home"
            />
            <ScrollToTop />
            <section className="grid grid-cols-3 gap-10">
                {images.map((image, index) => {
                    const data = getImage(image.node.localImage)
                    return (
                        <GatsbyImage
                            image={data}
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
                    localImage {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage
