import React, { useState } from 'react'
import "./login.scss"
import {BsEye,BsEyeSlashFill } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import zamok from "./zamok.gif"
import { instance } from "../../api/axios"
import { AiOutlineLoading } from "react-icons/ai"
import { toast } from 'react-toastify'

const Login = () => {
    const [asaisplay,setDisplay]=useState("none")
    const [asaisplayw,setDisplayw]=useState("block")
    const [isPaswordOpen,setIsPaswordOpen]=useState(false)
    const [adminName,setAdminName]=useState("")
    const [adminPassword,setAdminPassword]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const navigate = useNavigate()
    function kor(){
        setDisplay("block")
        setDisplayw("none")
        setIsPaswordOpen(true)
    }
    function korma(){
        setDisplay("none")
        setDisplayw("block")
        setIsPaswordOpen(false)
    }
    function loginUser(e){
        e.preventDefault()
        setIsLoading(true)
        instance.post("/auth/login",
            {
                username: adminName,
                password: adminPassword
            }
        ).then(response=>{
            if(response.data.token){
                localStorage.setItem("userToken",response.data.token)
                setIsLoading(false)
                toast.success(response.data.message)
                setAdminName("")
                setAdminPassword("")
                navigate("/login")
            }
        })
        .catch(err=>{
            console.log(err)
            setIsLoading(false)
            toast.error(err.response.data.message)
        })
    }
  return (
    <div className='login'>
        <div className='login__titles'>
            <strong>Login</strong>
            <form onSubmit={loginUser}>
                <input className='zaza' type="text" required placeholder='Enter name' value={adminName} onChange={(e)=>setAdminName(e.target.value)}/>
                <div className='farqi'><input value={adminPassword} onChange={e=>setAdminPassword(e.target.value)} placeholder='Enter password' required minLength={8} type={isPaswordOpen?"text":"password"} /><BsEye onClick={kor} style={{display:asaisplayw}}/><BsEyeSlashFill onClick={korma} style={{display:asaisplay}}/></div>
                <button disabled={isLoading ? true : false}> {isLoading?<AiOutlineLoading className='loding-icon'/>:<></>} {isLoading?"":"Kirish"}</button>
            </form>
            <Link style={{color:"#fff"}} className='login__link' to={"/"}>Главный</Link>
        </div>
        <div className='login__img'><img style={{width:"600px",height:"500px"}} src={zamok} alt="" /></div>
    </div>
  )
}

export default Login