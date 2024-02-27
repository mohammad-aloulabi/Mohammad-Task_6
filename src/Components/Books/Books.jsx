import React, { useEffect, useState } from 'react'
import BooksStyle from './BooksStyle.module.css'
import BookIcon from './../../assets/image/bookicon.svg'
import Star from './../../assets/image/star.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Books = () => {
    const [Id, setId] = useState("");
    const Navigate = useNavigate();
    function goToInfo(id) {
        setId(id)
        Navigate(`/page/${id}`, { state: { id } })
    }


    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://example-data.draftbit.com/books?_limit=8")
            .then(res => { setdata(res.data), console.log(res.data) }).catch(err => { console.log(err) })
    }, [])
    return (
        < >
            <div className={BooksStyle.BooksSection}>
                <h2>Selected for you</h2>
                <div className={BooksStyle.BooksContainer}>
                    {data?.map((element, ind) => {
                        return (
                            <div className={BooksStyle.BooksCard} key={ind}>
                                <img src={element?.image_url} className={BooksStyle.BooksImages} />
                                <p className={BooksStyle.authors}>{element?.authors}</p>
                                <div className={BooksStyle.CardDetails}>
                                    <div className={BooksStyle.BookIconDetails}>
                                        <div className={BooksStyle.BookIcon}><img src={BookIcon} /></div>
                                        <div className={BooksStyle.num_pages}>{element?.num_pages}</div>
                                    </div>
                                    <div className={BooksStyle.StarIconDetails}>
                                        <div className={BooksStyle.Star}><img src={Star} /></div>
                                        <div className={BooksStyle.rating}>{element?.rating}</div>
                                    </div>
                                </div>

                                <button onClick={() => { goToInfo(element.id) }} className={BooksStyle.CardBtn}>Show Details</button>
                            </div>

                        )
                    })}
                </div>
            </div>


        </>
    )
}

export default Books