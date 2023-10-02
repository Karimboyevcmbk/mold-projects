import {Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Nav from "./components/nav/Nav"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Productview from "./routes/product-view/Productview";
import MainCategory from "./routes/mainCategory/MainCategory";
import SubCategory from "./routes/subCategory/SubCategory";
import Login from "./routes/login/Login";
import Admin from "./routes/admin/Admin";
import Cart from "./components/cart/Cart";
import AdminMaxsulotlar from "./components/AdminMaxsulotlar/AdminMaxsulotlar"
import AdminQoshish from "./components/adminQoshish/AdminQoshish"

function App() {
  return (
    <div className="app">
      <Nav/>
      <Navbar/>
      <Cart/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product-view/:id" element={<Productview/>}/> 
        <Route path="/maincategory/:categoryname" element={<MainCategory/>} />
        <Route path="/subcategory/:subcategoryname" element={<SubCategory/>} />
        <Route path="/admin" element={<Login/>} />
        <Route path="/login" element={<Admin/>}/>
        <Route path="/login-maxsulotlar" element={<AdminMaxsulotlar/>}/>
        <Route path="/login-qoshish" element={<AdminQoshish/>}/>
      </Routes>
      <ToastContainer limit={2}/>
      <Footer/>
    </div>
  );
}

export default App;