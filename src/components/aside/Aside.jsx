import "./aside.scss"
import { AiOutlineAppstore } from "react-icons/ai"
import { useEffect,useState } from "react"
import { instance } from "../../api/axios"
import { Link } from "react-router-dom"

const Aside = () => {
  const [category, setCategory]=useState([])
  useEffect(() => {
    let isFetched = false
    instance("/category/category-nest")
      .then(response => setCategory(response.data))
      .catch(err=>console.log(err))

      return () =>{
        isFetched=true
      }
  }, [])
  return (
    <div className='aside'>
        <p className='plur'><div className='icon'><AiOutlineAppstore/></div>Категория</p>
        {
          category?.mainCategory_uz?.map((mainCategoryItem,ind)=>
          <p className="spa"><Link to={`/maincategory/${mainCategoryItem}`}>{mainCategoryItem}</Link> 
          <div className="sasa">
          {
            category.productSubCategories_uz[ind].map(subCategory =>
              subCategory ? <p className="fara"><Link to={`/subcategory/${subCategory}`}>{subCategory}</Link></p> : <></>
              )
          }
          </div>
          </p> 
          )
        }
    </div>
  )
}

export default Aside