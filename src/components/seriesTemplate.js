import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Image from './image'
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
                        secure_url
                    }
                }
            }
        }
    `)

    const images = data.allCloudinaryMedia.edges.filter((image) =>
        image.node.tags.includes(title)
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

            <section className="mt-20 text-center text-gray-400 text-sm">
                <p>{`Total images: ${images.length}`}</p>
            </section>
        </Layout>
    )
}

export default SeriesTemplate
