const API_KEY = 'apiKey=be7e4435c377405eb9afc514c077445f'
const QUERY_ALL_BR = 'https://newsapi.org/v2/top-headlines?country=br&'

const GetNoticias = async () => {
    
    const request = QUERY_ALL_BR + API_KEY

    const noticias = await fetch(`${request}`).then(res => res.json())
        
    /* console.log(noticias.articles) */

    return noticias.articles
}

export default GetNoticias