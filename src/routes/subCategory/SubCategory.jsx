import {useState,useEffect} from 'react'
import Aside from '../../components/aside/Aside'
import { useParams } from 'react-router-dom'
import { instance } from '../../api/axios'
import ProductCard from "../../components/product-card/ProductCard"

const SubCategory = () => {
    const {subcategoryname} = useParams()
    const [subCategory,setSubCategory]=useState([])
    useEffect(()=>{
        instance(`/category/subcategories/${subcategoryname}`)
            .then(response=>setSubCategory(response.data))
            .catch(err=>console.log(err))
    },[subcategoryname])
  return (
    <div style={{position:"relative"}}>
            <Aside/>
            <div className='main__category'>
                <h2>{subcategoryname}</h2>
                <div className='mainCategoryCards'>
                    {
                        subCategory?.subCategory?.map(subCategoryCard=>
                            <ProductCard productData={subCategoryCard}/>
                        )
                    }
                </div>
            </div>
        </div>
  )
}

export default SubCategory