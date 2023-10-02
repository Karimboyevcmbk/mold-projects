import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { instance } from '../../api/axios'
import "./productview.scss"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {BiChevronRight,BiSolidBasket} from 'react-icons/bi'

const Productview = () => {
  const currentLang = useSelector(state=>state)
  const [activeImg,setActiveImg] = useState(0)
  const [productViewData, setProductViewData] = useState(null)
  const [selectedV,setSelectedV]=useState(0)
  const [numberOfP,setNumberOfP]=useState(1)
  const dispatch = useDispatch()
  let productDataInUrl = useParams()

  useEffect(()=>{
    instance(`/product/single-product/${productDataInUrl.id}`)
      .then(response=>setProductViewData(response.data?.singleProduct?.at(0)))
      .catch(err=>console.log(err))
  },[productDataInUrl.id])
  function qoshish(){
    if(numberOfP<+productViewData?.productSizesAndQuantity[selectedV]?.quantity){
      setNumberOfP(numberOfP+1)
    }
  }
  function ayirish(){
    if(numberOfP>1){
      setNumberOfP(numberOfP-1)
    }
  }
  function adToCart(productData){
    const {productSizesAndQuantity, ...rest}=productData
    productData.selectedType = productSizesAndQuantity[selectedV]
    productData.count=numberOfP
    dispatch({productData, type: "ADD_TO_CART"})
  } 

  return (
    <div>
      <div className='singleProduct'>
        <div className='singlePImgs'>
          <img className='singlePImg' src={productViewData?.productImages[activeImg]} alt="" />
            <div className='imageChild'>
              {
                productViewData?.productImages.map((productImageThumb,ind)=>
                  <img style={ind == activeImg ? {border: "3px solid blue"} : null} className='dafara' src={productImageThumb} alt="" onClick={() => setActiveImg(ind)}/>  
                )
              }
            </div>
        </div>
        <div className='sinplePTitle'>
          <h2 className='productName'>{currentLang.language.lang==="uz"?productViewData?.productName_uz:productViewData?.productName_ru}</h2>
          <div className='categoryMainSub'>
            <button>{currentLang.language.lang==="uz"?productViewData?.productMainCategory_uz:productViewData?.productMainCategory_ru}</button>
            <BiChevronRight style={{fontSize:"30px",color:"dodgerblue"}}/>
            <button>{currentLang.language.lang==="uz"?productViewData?.productSubCategory_uz:productViewData?.productSubCategory_ru}</button>
          </div>
          <div className='productSklad'>
            <h6>Омборда: <span>{productViewData?.productSizesAndQuantity[selectedV]?.quantity}</span></h6>
            <div>
            <select style={{background:"dodgerblue",padding:"5px 10px",border:"none"}} onChange={(e)=>setSelectedV(e.target.value)}>{
              productViewData?.productSizesAndQuantity?.map((productSize,ind) =>
                <option value={ind}>{productSize.size}</option>
              )
            }</select>
            </div>
          </div>
          <h4 style={{fontSize:"50px",fontWeight:"bold",color:"blue",marginTop:"20px"}}>{productViewData?.productSizesAndQuantity[selectedV]?.price} CУМ</h4>
          <ul className='productUl'>
            {productViewData?.productDescription_uz?.map((siz)=>
              <li>{siz}</li>
            )}
          </ul>
          <div className='productViewPanel'>
            <div>
              <p style={{color:"#000",fontSize:"20px",fontWeight:"bold",marginBottom:"10px"}}>Cони:</p>
              <div style={{display:"flex",alignItems:"center",padding:"10px",background:"blue",borderRadius:"10px",gap:"10px"}}>
                <button style={{padding:" 5px 13px",color:"blue",fontSize:"20px"}} onClick={ayirish}>-</button>
                <p>{numberOfP}</p>
                <button style={{padding:" 5px 10px",color:"blue",fontSize:"20px"}} onClick={qoshish}>+</button>
              </div>
            </div>
            <div>
              <p style={{color:"#000",fontSize:"20px",fontWeight:"bold",marginBottom:"10px"}}>Умумий нархи:</p>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px 10px",background:"blue",borderRadius:"10px",color:"#fff",fontSize:"20px"}}>{numberOfP*productViewData?.productSizesAndQuantity[selectedV]?.price}</div>
            </div>
            <button onClick={()=>adToCart(productViewData)} style={{background:"green",border:"none",borderRadius:"5px",padding:"20px 20px",color:"#fff",fontSize:"20px",gap:"10px",marginTop:"30px"}}><BiSolidBasket/>Саватга қўшиш</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productview