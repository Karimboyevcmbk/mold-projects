import {useState,useEffect} from 'react'
import Aside from '../../components/aside/Aside'
import { useParams } from 'react-router-dom'
import { instance } from '../../api/axios'
import "./mainCategory.scss"
import ProductCard from "../../components/product-card/ProductCard"

const MainCategory = () => {
    const {categoryname} = useParams()
    const [mainCategory,setMainCategory]=useState([])

    useEffect(()=>{
        instance(`/category/categories/${categoryname}`)
            .then(response=>setMainCategory(response.data))
            .catch(err=>console.log(err))
    },[categoryname])
    return (
        <div style={{position:"relative"}}>
            <Aside/>
            <div className='main__category'>
                <h2>{categoryname}</h2>
                <div className='mainCategoryCards'>
                    {
                        mainCategory?.maincategory?.map(mainCategoryCard=>
                            <ProductCard productData={mainCategoryCard}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MainCategory