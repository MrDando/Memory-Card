
function getImages() {
    const images = []
    let noErrors = true

    let i = 1;
    while(noErrors) {
        try {
            const url = require(`../Assets/card-${i}.jpeg`).default
            const id = i
            i = i + 1

            const image = { 
                id: id, 
                url: url}

            images.push(image)
        }
        catch(err) {
            noErrors = false
        }
    }

    return images
}

export default getImages