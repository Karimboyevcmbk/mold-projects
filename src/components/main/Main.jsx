import { useEffect, useState, Fragment} from 'react';
import { instance } from '../../api/axios';
import { v4 as uuidv4 } from 'uuid';
import ProductCarousel from '../product-carousel/ProductCarousel';
import "./Main.scss";
import { useSelector } from 'react-redux';
import Order from "../order/Order"

const Main = () => {
  const [homeReeldata, setHomeReeldata] = useState([]);
  const currentLang = useSelector(state=>state)
  console.log(currentLang.lang)

  useEffect(() => {
    let isDataFetched = false;
    instance("/category/category-reel")
      .then(response => setHomeReeldata(response.data))
      .catch(err => console.log(err))

    return () => {
      isDataFetched = true;
    }
  }, [])

  return (
    <div className='home__product-carousel'>
      {
        homeReeldata.slice(0, 4).map(category => 
          <Fragment key={uuidv4()}>
            <h2>{currentLang.language.lang === "uz" ? category.categoryName_uz : category.categoryName_ru}</h2>  
            <ProductCarousel categoryData={category}/>
          </Fragment>
        )
      }
      <Order/>
    </div>
  )
}

export default Main