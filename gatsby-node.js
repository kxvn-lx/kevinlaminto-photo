const path = require(`path`)

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const seriesTemplate = path.resolve(`src/components/seriesTemplate.js`)
    const result = await graphql(`
        query {
            allCloudinaryMedia(filter: { tags: { nin: ["main"] } }) {
                edges {
                    node {
                        tags
                    }
                }
            }
        }
    `)

    const taggedImages = result.data.allCloudinaryMedia.edges.map((image) => {
        const tags = image.node.tags
        const featureIndex = tags.indexOf('feature')

        if (featureIndex !== -1) {
            tags.splice(featureIndex, 1)
        }

        if (tags.length === 1) {
            return tags[0]
        }
    })

    const tags = taggedImages.filter((v, i, a) => a.indexOf(v) === i)

    tags.forEach((tag) => {
        const slug = `series/${tag.replace(/\s+/g, '-').toLowerCase()}`
        createPage({
            path: slug,
            component: seriesTemplate,
            context: {
                title: tag,
            },
        })
    })
}
