import "./navbar.scss"
import { useEffect, useState } from 'react'
import saytLogo from  "./saytlogo.svg"
import searchIcon from "./searchicon.png"
import { instance } from "../../api/axios"
import { Link, NavLink } from 'react-router-dom'
import noResult from "./noresult.png"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
const exceptionalRoutes = ["/admin","/login","/login-maxsulotlar","/login-qoshish"]

const Navbar = () => {
  const { t } = useTranslation()
  const location=useLocation()
  const [inputSearch,setInputSearch]=useState("")
  const [searchResult,setSearchResult]=useState([])
  useEffect(()=>{
    instance(`product/search/${inputSearch}`)
      .then(response=>setSearchResult(response.data))
      .catch(err=>{
        console.log(err)
        setSearchResult([])
      })
  },[inputSearch])
  function clean(){
    setInputSearch("")
  }
  return !exceptionalRoutes.includes(location.pathname) ?(
    <div className='navbar'>
        <div className='search'>
            <img src={saytLogo} alt="" />
            <div className='search__panel'>
                <input type="text" placeholder='Qidirish....' value={inputSearch} onChange={e=>setInputSearch(e.target.value)}/>
                <div><img style={{objectFit:"contain"}} src={searchIcon} alt="" /></div>
            </div>
            {searchResult.length > 0 || inputSearch.length > 0 ? <div className="searchResults">
              <div className="hahaha">
                <div><span>{t("navbar.qidirishNatijalari")}</span><div className="halom">#{inputSearch}</div></div>
                <div><span>{searchResult.length} {t("navbar.natija")}</span><p onClick={clean} style={{cursor:"pointer"}}>{t("navbar.bekorQilish")}</p></div>
              </div>
              {
                searchResult?.map(searchedItem=>
                  <Link to={`/product-view/${searchedItem._id}`}>
                    <div onClick={clean} className="searcheditem">
                      <div className="lalalala">
                        <img src={searchedItem.productImages[0]} alt="" />
                        <strong>{searchedItem.productName_uz}</strong>
                      </div>
                      <strong>{searchedItem.productSizesAndQuantity[0].price} - {searchedItem.productSizesAndQuantity[searchedItem.productSizesAndQuantity.length-1].price}</strong>
                    </div>  
                  </Link>
                )
              }
              { searchResult.length < 1? <img className="noresult__img" style={{width:"200px",height:"200px"}} src={noResult} alt="noResult"/>:<></>}
            </div>:<></>}
        </div>
        <div className='sahifalar'>
            <NavLink to="/">{t("navbar.boshSahifa")}</NavLink>
            <NavLink to="/about">{t("navbar.bizHaqimizda")}</NavLink>
            <NavLink to="/contact">{t("navbar.aloqa")}</NavLink>
        </div>
    </div>
  ):<></>
}

export default Navbar