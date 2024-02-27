import { React, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import NavStyle from './NavBarStyle.module.css'
import logoLight from './../../assets/image/BWorldLight.png'
import logoDark from './../../assets/image/BWorldDark.png'
import circle from './../../assets/image/circle.svg'
import bookicon from './../../assets/image/bookicon.svg'
import moonDark from './../../assets/image/moon.svg'
import sunLight from './../../assets/image/sun.svg'
import switchDark from './../../assets/image/switchDark.png'
import switchLight from './../../assets/image/switchLight.png'
import { Link, NavLink } from 'react-router-dom'



const Navbar = ({ theme, settheme }) => {

    
    const toogleDarkMode = () => {
        theme == 'light' ? settheme('dark') : settheme('light')
    }
    const [istoggleBtn, setistoggleBtn] = useState(true)

    return (
        <div className={NavStyle.NavHead}>
            <NavLink to={'/'}> <div className={NavStyle.Logo} >
                <img src={theme == 'light' ? logoLight : logoDark} />
                <div className={NavStyle.circle}>
                    <img className={NavStyle.imgCircle} src={circle} />
                    <img src={bookicon} className={NavStyle.imgIcon} />
                </div>
            </div></NavLink>
            <ul className={NavStyle.ul}>
                <li> <Link to={'/'}> Home </Link></li>
                <li>News</li>
                <li>Promotion of the mount</li>
                <li>Plublishs</li>
                <li>Subscribe to the newsletter</li>
            </ul>
            <div className={NavStyle.Darkbtn} onClick={toogleDarkMode}>
                <img src={theme == 'light' ? moonDark : sunLight} />
                <p>{theme == 'light' ? 'Dark Mode' : 'Light Mode'} </p>
            </div>
            <button onClick={() => setistoggleBtn(!istoggleBtn)} className={NavStyle.togglebtn}>{istoggleBtn ? <FaBars /> : <FaTimes />}
            </button>


            {/* -------------------------Mobile NavBar----------------------------- */}


            <div className={NavStyle.Navmobile}>
                <ul className={istoggleBtn ? NavStyle.ul : NavStyle.ulmobile} onClick={() => setistoggleBtn(!istoggleBtn)}>
                    <li> <Link to={'/'}> Home </Link></li>
                    <li>News</li>
                    <li>Promotion of the mount</li>
                    <li>Plublishs</li>
                    <li>Subscribe to the newsletter</li>
                </ul>
                <div className={NavStyle.switchdiv}>
                    <img src={theme == 'light' ? switchDark : switchLight} onClick={toogleDarkMode} className={istoggleBtn ? NavStyle.ul : NavStyle.switchMode} />
                    <li className={istoggleBtn ? NavStyle.ul : NavStyle.describe}>{theme == 'light' ? 'Dark Mode' : 'Light Mode'}</li>
                </div>
            </div>

        </div>
    )
}


export default Navbar