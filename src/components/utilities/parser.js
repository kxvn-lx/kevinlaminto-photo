export const parsedUniqueOnly = (arr) => {
    let tempDict = {}
    let tempArr = []

    arr.forEach((obj) => {
        const tags = obj.node.tags
        // By default, tags should be ["feature", <series name>]
        if (tags.length > 2) {
            throw 'Tags can only contain 2 tag'
        }

        const featureIndex = tags.indexOf('feature')

        if (featureIndex !== -1) {
            tags.splice(featureIndex, 1)
        }
        const seriesTag = tags[0]

        if (!tempDict.hasOwnProperty(seriesTag)) {
            tempDict[seriesTag] = obj.node.secure_url
        }

        if (obj.node.tags.includes('feature')) {
            tempDict[seriesTag] = obj.node.secure_url
        }
    })

    for (var key in tempDict) {
        if (tempDict.hasOwnProperty(key)) {
            tempArr.push({
                tag: key,
                secure_url: tempDict[key],
            })
        }
    }

    return tempArr
}
