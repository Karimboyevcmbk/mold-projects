import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import imgage from './img.svg'
import img from "./imas.svg"
import { Pagination,Navigation } from 'swiper/modules';
import "./Banner.scss"
import Aside from "../aside/Aside"

const Banner = () => {
  return (
    <div className='Banner'>
      <Aside/>
        <Swiper pagination={true} loop={true} autoplay={{delay:1000}} navigation={true} draggable={true} modules={[Pagination,Navigation]} className="bannerS">
            <SwiperSlide><img src={imgage} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Banner