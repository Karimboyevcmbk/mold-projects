import React from 'react'
import "./about.scss"
import Sas from "./office-min 2.153cd0976584138310b4.jpg"
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className='about'>
      <h1>{t("about.BizHaqimizda")}</h1>
      <p>{t("about.malumotlar")}</p>
      <img src={Sas} alt="" /> 
      <p>{t("about.asosiyMalumot")}</p>
      <p>{t("about.li")}</p>
    </div>
  )
}

export default About