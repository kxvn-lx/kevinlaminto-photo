import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'
import SEO from '../components/seo'
import { parsedUniqueOnly } from '../components/utilities/parser'
import Image from '../components/image'

function series({ data }) {
    const taggedImages = data.allCloudinaryMedia.edges
    const uniquedImages = parsedUniqueOnly(taggedImages)

    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Series"
            />
            <ScrollToTop />
            <section className="grid grid-cols-3 gap-10">
                {uniquedImages.map((image, index) => {
                    const link = `${image.tag
                        .replace(/\s+/g, '-')
                        .toLowerCase()}`
                    return (
                        <Link to={link} className="no-underline kl-layout-item">
                            <Image
                                key={index}
                                src={image.secure_url}
                                alt={index}
                            />
                            <p className="mt-2">{image.tag}</p>
                        </Link>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
    query SeriesQuery {
        allCloudinaryMedia(filter: { tags: { nin: ["main"] } }) {
            edges {
                node {
                    tags
                    secure_url
                }
            }
        }
    }
`

export default series
