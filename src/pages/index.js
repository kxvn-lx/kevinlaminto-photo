import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
    const data = useStaticQuery(graphql`
        query CloudinaryImages {
            allCloudinaryMedia {
                edges {
                    node {
                        secure_url
                    }
                }
            }
        }
    `)
    const images = data.allCloudinaryMedia.edges

    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Home"
            />

            <section className="grid grid-rows-1 gap-4">
                {images.map((image, index) => (
                    <img
                        src={image.node.secure_url}
                        alt={index}
                        loading="lazy"
                    />
                ))}
            </section>
        </Layout>
    )
}

export default IndexPage
