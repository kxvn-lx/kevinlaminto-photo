import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from './layout'
import SEO from './seo'
import ScrollToTop from './scrollToTop'

const SeriesTemplate = (props) => {
    const { title } = props.pageContext

    const data = useStaticQuery(graphql`
        query {
            allCloudinaryMedia {
                edges {
                    node {
                        tags
                        localImage {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    layout: FULL_WIDTH
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

    const images = data.allCloudinaryMedia.edges.filter(
        (image) => image.node.tags[0] === title
    )

    return (
        <Layout>
            <SEO
                keywords={[
                    `kevinlaminto`,
                    `kevin laminto`,
                    `kevin laminto photography`,
                    `kevin laminto aesthetic`,
                    `melbourne photographer`,
                    `melbourne fashion photographer`,
                ]}
                title={title}
            />
            <ScrollToTop />

            <section className="py-20">
                <h1 className="text-3xl font-medium text-center">{title}</h1>
            </section>

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

            <section className="mt-20 text-center text-gray-400 text-sm">
                <p>{`Total images: ${images.length}`}</p>
            </section>
        </Layout>
    )
}

export default SeriesTemplate
