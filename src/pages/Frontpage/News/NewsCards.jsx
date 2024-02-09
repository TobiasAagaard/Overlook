import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./NewsCards.module.scss"

export const NewsCards = () => {
    const [news, setNews] = useState([])
    const endpoint = "http://localhost:4000/news"
    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await axios(endpoint);
                setNews(res.data)
            } catch (err) {
                console.error(err)
            }
        };
        getNews()
    }, [])
    return (
       <>
       <h2>Sidste nyt</h2>
        <figure className={Styles.newsCards}>
            {news.slice(0, 3).map((data)=> (
                <div key={data.id}>
                    <img src={`http://localhost:4000/images/${data.image.filename}`} alt={data.title} />
                    <figcaption>
                        <h3>{data.title}</h3>
                        <p>{data.teaser}</p>
                        </figcaption>
                </div>
            ))}
        </figure>
       </>
    )
}


