const path = require(`path`)

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
            })
        }
    }

    return tempArr
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const seriesTemplate = path.resolve(`src/components/seriesTemplate.js`)
    const result = await graphql(`
        query {
            allCloudinaryMedia {
                edges {
                    node {
                        tags
                    }
                }
            }
        }
    `)

    const taggedImages = result.data.allCloudinaryMedia.edges.filter(
        (image) => image.node.tags.length > 0
    )

    const tags = taggedImages
        .map((image) => image.node.tags[0])
        .filter((v, i, a) => a.indexOf(v) === i)

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
