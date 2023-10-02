import React from 'react';
import "./ProductCard.scss";
import {Link} from "react-router-dom"
import { FiChevronRight } from 'react-icons/fi';
import { FaHandPointer } from "react-icons/fa"
import {BiSolidBasket} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({productData}) => {
  const currentLang = useSelector(state=>state)
  const dispatch = useDispatch()
  return (
    <div className='product-card'>
      <Link to={`/product-view/${productData._id}`}><img src={productData.productImages[0]} alt="" /></Link>
      <h3>{currentLang.language.lang==="uz"?productData.productName_uz:productData.productName_ru}</h3>
      <div className='salon'>
        <span>{currentLang.language.lang==="uz"?productData.productMainCategory_uz:productData.productMainCategory_ru}</span><FiChevronRight/><span>{currentLang.language.lang==="uz"?productData.productSubCategory_uz:productData.productSubCategory_ru}</span>
      </div>
      <div className='priceCard'>
        <p>{`${productData?.productSizesAndQuantity[0].price} SUM ${productData?.productSizesAndQuantity.length > 1 ?"- "+  productData?.productSizesAndQuantity.reverse()[0].price+" SUM":""}`}</p>
      </div>
      {
        productData?.productSizesAndQuantity.length>1?<Link style={{padding:"10px",background:"blue",color:"#fff",borderRadius:"10px"}} to={`/product-view/${productData._id}`}><FaHandPointer/>Танлаш</Link>:<button style={{padding:"10px",background:"blue",color:"#fff",borderRadius:"10px",border:"none"}}><BiSolidBasket/>Саватга қўшиш</button>
      }
    </div>
  )
}

export default ProductCard