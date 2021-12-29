const apikey = '8uRbFbAAqxrHC7GkNZ40NkoidcCCjD9r'

export default function getGifs({keyword = 'nft-nfts'} = {}) {
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}1&limit=10&offset=0&rating=g&lang=en`
    
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const gifs = data.map(image => {
                const {images, title, id} = image
                const {url} = images.downsized_medium
                return {title, id , url}
            })
            return gifs
        })  
}
