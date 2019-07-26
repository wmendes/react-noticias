import React, { useState, useEffect } from 'react'
import GetNoticias from '../../services'
import { trataTitulos, trataDatas } from '../../util'
import Noticia from '../Noticia'

function Feed() {

    const [noticias, setNoticias] = useState([])

    

    useEffect(() => {
        const fetchNoticias = async () => {
            const resp = await GetNoticias()
            const noticias = resp.map(item => {
               item.title = trataTitulos(item.title)
               item.publishedAt = trataDatas(item.publishedAt)
               return item
            })
            setNoticias(noticias)
        }
        fetchNoticias()

    }, [])

    return (
        noticias.map((item, key) => {
            return <Noticia key={key} item={item} />
        })
    )
}

export default Feed
