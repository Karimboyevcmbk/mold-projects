import { useState } from "react"
import { useLocation } from "react-router-dom"
import "./cart.scss"
import FreeImg from "./free.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector,useDispatch } from "react-redux"
import { BsChevronRight,BsFillTrashFill } from "react-icons/bs"
const exceptionalRoutes = ["/admin","/login","/login-maxsulotlar","/login-qoshish"]

const Cart = () => {
  const cartCiqar = useSelector(state=>state.cart.cartProducts)
  const dispatch = useDispatch()
  const [bilmadm,setBilmadm] = useState("")
  const [bildm,setBildm] = useState("")
  const location = useLocation()
  const [isCartOpen,setIsCartOpen]=useState(false)
  function clearInput(e){
    setBilmadm("")
    setBildm("")
    e.preventDefault()
  }
  function removeToCart(id){
    dispatch({id,type:"REMOVE_CART"})
  }
  function deleteAll(){
    dispatch({type:"DELETE_ALL"})
  }
  return !exceptionalRoutes.includes(location.pathname) ?(
    <div className={isCartOpen ? "cartActive" : "cart" }>
        <div className="openCloseButton" onClick={()=>setIsCartOpen(!isCartOpen)}><AiOutlineShoppingCart/></div>
          <storng style={{fontSize:"30px"}}>Сават</storng>
        {
          cartCiqar.length==0?
            <div className="cart-free">
              <strong>Сават бўш</strong>
              <img style={{margin:"20px 0"}} src={FreeImg} alt="" />
              <h6 onClick={()=>{setIsCartOpen(false)}} style={{cursor:"pointer",fontSize:"30px",color:"blue"}}>Харид қилиш</h6>
            </div>
            :
            <div>
              <button onClick={deleteAll} style={{position:"absolute",top:"10px",right:"10px",padding:"5px 10px",backgroundColor:"red",color:"#fff"}}>Hammasini o'chirish</button>
              <div className="chosenProdut">
              {
                cartCiqar.map((carts,ind)=>
                  <div className="chosenCarts" key={ind}>
                    <button onClick={()=>removeToCart(carts._id)}  style={{padding:"7px",backgroundColor:"red",border:"none",color:"#fff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"-10px",right:"0"}}><BsFillTrashFill/></button>
                    <img src={carts.productImages[0]} alt="" />
                    <div className="chosenCarts_titles">
                      <h5>{carts.productName_uz}</h5>
                      <BsChevronRight style={{fontSize:"20px",color:"blue",fontWeight:"900"}}/>
                      <div style={{backgroundColor:"#4361EE",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>{carts.selectedType.size}</div>
                    </div>
                    <p style={{color:"blue",fontWeight:"500",marginTop:"5px"}}>{carts.selectedType.price} SUM</p>
                  </div>
                )
              }
              </div>
              <div className="buyTheProduct">
                <h3 style={{color:"black",fontSize:"20px"}}>Cони: 1</h3>
                <strong style={{fontSize:"30px",color:"green"}}>280 000 CУМ</strong>
                <form onSubmit={(e)=>clearInput(e)}>
                  <input required onChange={(e)=>setBilmadm(e.target.value)} type="text" value={bilmadm} placeholder="Исмингиз ва Фамилиянгиз"/>
                  <input required onChange={(e)=>setBildm(e.target.value)} type="number" value={bildm} placeholder="Телефон (991234567)"/>
                  <button >Buyurtma Berish</button>
                </form>
              </div>
            </div>
        }
    </div>
  ):<></>
}

export default Cart