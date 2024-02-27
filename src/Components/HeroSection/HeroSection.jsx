import React from 'react'
import HeroStyle from './HeroStyle.module.css'
import booke from './../../assets/image/book.png'


const HeroSection = () => {
  
    return (
        <div className={HeroStyle.heroHead}>
            <div className={HeroStyle.heroDetails}>
                <button>Author of august</button>
                <h1>Eric-Emanuel Schmitt</h1>
                <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions,
                    and in 2001 he received the title of Chevalier des Arts et des Lettres.
                    His books have been translated into over 40 languages</p>
                <button className={HeroStyle.btnViewBook}>View his boooks</button>
            </div>
            <div className={HeroStyle.heroPicture}>
                <img src={booke} />
            </div>
        </div>
    )
}

export default HeroSection