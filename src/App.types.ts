import picT1 from './img/prodT1.jpg'
import picT2 from './img/prodT2.jpg'
import picT3 from './img/prodT3.jpg'
import picT4 from './img/prod4.jpg'
import backTT from './img/backT.png'
import backTD from './img/backTD.jpg'
import backNM from './img/news-products-mob.png'
import backND from './img/news-product.jpg'
import N1 from './img/N1.jpg'
import N2 from './img/N2.jpg'
import N3 from './img/N3.jpg'
import N4 from './img/N4.jpg'


type design = {
    product: productes[],
    backimage: string,
    backimageD: string,
    text: string
}

type productes = {
    src: string,
    title: string,
    price: string,
    takhfif: number
}

const Dataprud: productes[] = [{
    src: picT1,
    title: "فلوئید ضدجوش مد اکنیل ",
    price: "۲۹۲,۶۰۰ تومان",
    takhfif: 50
}, {
    src: picT2,
    title: "کرم روشن کننده ترنکسید ",
    price: "۳۹۸,۹۰۴ تومان",
    takhfif: 20
}, {
    src: picT3,
    title: "ادوپرفیوم جبلیشن مردانه",
    price: "۳۷۵,۱۵۵ تومان",
    takhfif: 5
}, {
    src: picT4,
    title: "لاک SP31 لیا ویتو",
    price: "۸۶,۶۷۵ تومان",
    takhfif: 15
}];

const DesignT: design = {
    product: Dataprud,
    backimage: backTT,
    backimageD: backTD,
    text: "پیشنهاد رویایی"
}

const newProduct: productes[] = [{
    src: N1,
    title: "پاف دو طرفه",
    price: "۳۵۵,۴۱۰ تومان",
    takhfif: 0
}, {
    src: N2,
    title: "ادوپرفیوم جبلیشن مردانه",
    price: "۳۷۵,۱۵۵ تومان",
    takhfif: 25
}, {
    src: N3,
    title: "رژلب جامد ",
    price: "۴۷۸,۵۰۰ تومان",
    takhfif: 0
}, {
    src: N4,
    title: "بادی اسپلش مردانه ",
    price: "۱۳۸,۴۷۴ تومان ",
    takhfif: 15
}, {
    src: picT4,
    title: "لاک SP31 لیا ویتو",
    price: "۸۶,۶۷۵ تومان",
    takhfif: 15
}];
const newDesign:design={
    product:newProduct,
    backimage:backNM,
    backimageD:backND,
    text:"جدیدترین هارویایی"
}

export {DesignT,newDesign ,design, productes}