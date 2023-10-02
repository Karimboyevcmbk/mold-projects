import "./AdminSidebar.scss"
import uzbFlag from "../nav/uzbek-flag.png"
import rusFlag from "../nav/rus.png"
import { MdOutlineAdminPanelSettings } from "react-icons/md"
import { AiOutlineShoppingCart,AiOutlinePlus,AiOutlineEnter } from "react-icons/ai"
import { TfiPencilAlt } from "react-icons/tfi"
import { Link } from "react-router-dom"
const AdminSidebar = () => {
  return (
    <div className="adminSideBar">
        <img className="admin_siebar_logo-img" src="static/media/logoBlue.b0b9396a6e0808fb9ca8b5bbf73c5d4d.b0b9396a6e0808fb9ca8b5bbf73c5d4d.svg" alt=""/>
        <div className="flags_lang">
            <img src={uzbFlag} alt="" />
            <img src={rusFlag} alt="" />
        </div>
        <div className="admin_panel_id">
            <div className="admin_panel_id_icon"><MdOutlineAdminPanelSettings/></div>
            <div className="admin_panel_id_title">
                <h4>6270F64B</h4>
                <p>Админ</p>
            </div>
        </div>
        <Link to="/login">
            <div className="admin_page">
                <AiOutlineShoppingCart className="admin_page_icon"/>
                <p>Буюртмалар</p>
            </div>
        </Link>
        <Link to="/login-maxsulotlar">
            <div className="admin_page">
                <TfiPencilAlt className="admin_page_icon"/>
                <p>Махсулот бошкариш</p>
            </div>
        </Link>
        <Link to="/login-qoshish">
            <div className="admin_page">
                <AiOutlinePlus className="admin_page_icon"/>
                <p>Кушиш</p>
            </div>
        </Link>
        <Link to="/admin">
            <div className="admin_page admin_page_lastchild">
                <AiOutlineEnter className="admin_page_icon"/>
                <p>Чикиш</p>
            </div>
        </Link>
    </div>
  )
}

export default AdminSidebar