import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'
import SEO from '../components/seo'

const parsedUniqueOnly = (arr) => {
    let tempDict = {}
    let tempArr = []

    arr.forEach((obj) => {
        const tags = obj.node.tags
        if (!tempDict.hasOwnProperty(tags[0])) {
            tempDict[tags[0]] = obj.node.localImage
        }

        if (tags.includes('feature')) {
            tempDict[tags[0]] = obj.node.localImage
        }
    })

    for (var key in tempDict) {
        if (tempDict.hasOwnProperty(key)) {
            tempArr.push({
                tag: key,
                localImage: tempDict[key],
            })
        }
    }

    return tempArr
}

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
            <ul className="grid grid-cols-2 gap-4">
                {uniquedImages.map((image, index) => {
                    const data = getImage(image.localImage)
                    const link = `${image.tag}`
                    return (
                        <li>
                            <Link to={link} className="no-underline">
                                <GatsbyImage image={data} alt={index} />
                                <p className="mt-2">{image.tag}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query SeriesQuery {
        allCloudinaryMedia(filter: { tags: { nin: ["main"] } }) {
            edges {
                node {
                    tags
                    localImage {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                aspectRatio: 1
                            )
                        }
                    }
                }
            }
        }
    }
`

export default series
