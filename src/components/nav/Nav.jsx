import React from 'react'
import './nav.scss'
import uzbekFlag from "./uzbek-flag.png"
import i18n from "../../language/i18next"
import { useTranslation } from 'react-i18next'
import rusFlag from "./rus.png"
import phone from "./phone.svg"
import mail from "./mail.png"
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const exceptionalRoutes = ["/admin","/login","/login/side","/login-maxsulotlar","/login-qoshish"]

const Nav = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const location=useLocation()
  function changeLang(selectedLang){
    i18n.changeLanguage(selectedLang)
    dispatch({language_code: selectedLang,type:"CHANGE_LANG"})
  }
  return !exceptionalRoutes.includes(location.pathname) ?(
    <nav>
        <div className='nav__wrapper'>
            <div className='uzFlag' onClick={()=>changeLang("uz")}><img src={uzbekFlag} alt=""/></div>
            <div className='rusFlag' onClick={()=>changeLang("ru")}><img src={rusFlag} alt="" /></div>
            <a href="tel:+998946803432"><img src={phone} alt="" />+998 94-680-34-32</a>
            <a href="mailto:shakhhumoyun66@gmail.com"><img src={mail} alt="" />shakhhumoyun66@gmail.com</a>
        </div>
    </nav>
  ):<></>
  }

export default Nav