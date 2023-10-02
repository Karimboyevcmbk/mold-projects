import { useTranslation } from 'react-i18next'
import "./Order.scss"

const Order = () => {
    const { t } = useTranslation()
  return (
    <div className='order'>
        <div className='order_section1'><h2>{t("Order.bizMijozTaklif")}</h2></div>
        <div className='order_section2'>
            <div className='card'>
                <h4>{t("Order.sotibOlish")}</h4>
                <p>{t("Order.sotibOlishItem")}</p>
            </div>
            <div className='card'>
                <h4>{t("Order.yetkazish")}</h4>
                <p>{t("Order.yetkazishItem")}</p>
            </div>
            <div className='card'>
                <h4>{t("Order.bonus")}</h4>
                <p>{t("Order.bonusItem")}</p>
            </div>
            <div className='card'>
                <h4>{t("Order.yordam")}</h4>
                <p>{t("Order.yordamItem")}</p>
            </div>
        </div>
    </div>
  )
}

export default Order