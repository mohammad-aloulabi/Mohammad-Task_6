import React, { useEffect, useState } from 'react'
import Navbar from './../Components/NavBar/Navbar'
import HeroSection from './../Components/HeroSection/HeroSection'
import Books from './../Components/Books/Books'
import Location from '../Components/Location/Location'
import Footer from '../Components/Footer/Footer'
import BookApi from '../Components/BookApi/BookApi'



const HomePage = () => {

    // ------------------------------for Dark Mode------------------------------------------

    const current_theme = localStorage.getItem('current_theme')
    const [theme, settheme] = useState(current_theme ? current_theme : 'light');
    useEffect(() => {
        localStorage.setItem('current_theme', theme)
    }, [theme])

    // -------------------------------------------------------------------------------------
    return (
        <div className={`light ${theme}`} >
            <Navbar theme={theme} settheme={settheme} />
            <HeroSection />
            <Books />
            <Location />
            <Footer />
        </div>
    )
}

export default HomePage





// const [linksMap, setlinkMap] = useState([
//     {
//         tabe: 'Home',
//         path: '/'
//     },
//     {
//         tabe: 'News',
//     },
//     {
//         tabe: 'Promotion of the mount',
//     },
//     {
//         tabe: 'HoPlublishsme',
//     },
//     {
//         tabe: 'Subscribe to the newsletter',
//     }
// ])



// {linksMap.map((element, ind) => {
//     return (
//         <Navbar Home={element.tabe} path={element.path} key={ind} />
//     )
// })}