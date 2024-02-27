import React, { useEffect, useState } from 'react'
import StyleApi from './BookApiStyle.module.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import possitiveLight from './../../assets/image/possitiveLight.svg'
import possitiveDark from './../../assets/image/positiveDark.png'
import nagativeLight from './../../assets/image/nagativeLight.svg'
import negativeDark from './../../assets/image/negativeDark.png'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const BookApi = () => {

    // -------------------------for Dark Mode-------------------------------------

    const current_theme = localStorage.getItem('current_theme')
    const [theme, settheme] = useState(current_theme ? current_theme : 'light');
    useEffect(() => {
        localStorage.setItem('current_theme', theme)
    }, [theme])

    // --------------------------------------------------------------------------------

    const [bookInfo, setbookInfo] = useState('');
    const { state } = useLocation();
    const id = state.id;

    useEffect(() => {

        axios.get(`https://example-data.draftbit.com/books/${id}`)
            .then(res => { setbookInfo(res.data), console.log(res.data) }).catch(err => { console.log(err) })

    }, []);
    return (
        <div className={`${theme}`}>
            <Navbar theme={theme} settheme={settheme} />

            <div className={StyleApi.BookApi}>
                <div className={StyleApi.imageApi}>
                    <img src={bookInfo.image_url} className={StyleApi.imageApiImage} />
                </div>

                {/* -------------------------------- */}

                <div className={StyleApi.BookDetailsApi}>
                    <h1 className={StyleApi.BookName}>{bookInfo.title}</h1>
                    <p className={StyleApi.BookArthur}>{bookInfo.authors}</p>
                    <p className={StyleApi.BookDescription}>{bookInfo.description}</p>
                    <div className={StyleApi.circleBtns}>
                        <img src={theme == 'light' ? possitiveLight : possitiveDark} />
                        1
                        <img src={theme == 'light' ? nagativeLight : negativeDark} />
                    </div>

                    <div className={StyleApi.OptionsBook}>
                        <button className={StyleApi.Add_Fav}>Add to Card</button>
                        <button className={StyleApi.Add_Fav}>Favorate</button>
                    </div>

                    <hr />
                    <div className={StyleApi.NumberRatingReviw}>
                        <div className={StyleApi.PageNumber}>
                            <p className={StyleApi.PagesNumberTitle}>Pages Numbe :</p>
                            <p className={StyleApi.PagesNumberCount}>{bookInfo.num_pages}</p>
                        </div>
                        <div className={StyleApi.BookRating}>
                            <p className={StyleApi.BookRatingTitle}>Rating Count :</p>
                            <p className={StyleApi.BookRatingCount}>{bookInfo.rating_count}</p>
                        </div>
                        <div className={StyleApi.Reviews}>
                            <p className={StyleApi.ReviewsTitle}>Reviews :</p>
                            <p className={StyleApi.ReviewsCount}>{bookInfo.review_count}</p>
                        </div>
                    </div>


                </div>

                {/* ------------------------------------  */}



            </div>
            <Footer />
        </div>
    )
}

export default BookApi