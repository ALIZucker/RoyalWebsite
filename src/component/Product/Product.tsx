import React, {useState} from 'react';
import {design, productes} from "../../App.types"


const Product: React.FC<design> = ({product, backimage, backimageD, text}: design) => {


    const stylemain: React.CSSProperties = {
        backgroundImage: `url(${backimage})`
        , height: "70vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginTop: "5vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    const stylemainD: React.CSSProperties = {
        backgroundImage: `url(${backimageD})`,
        backgroundPosition: "center",
        backgroundSize: "contain"


    }

    const [screansize, setscreansize] = useState<number>(window.screen.width)
    window.onresize = () => {
        console.log(setscreansize)
        setscreansize(window.screen.width);

    }
    return (
        <div style={screansize < 1024 ? stylemain : stylemainD}>
            <p className="text-xl text-gray-900 font-semibold mt-[5vh]  lg:text-right lg:w-[97%] lg:pt-5 lg:text-4xl">{text}</p>
            <section className="flex flex-row space-x-10 mt-[5vh] overflow-x-scroll max-w-[80%] py-2 scrollH
            lg:mt-1 lg:p-11">
                {
                    product.map(value => {
                        return (
                            <BodyProducs src={value.src} title={value.title} price={value.price}
                                         takhfif={value.takhfif}/>
                        )
                    })
                }
            </section>
            <div className=" lg:text-right lg:w-[97%] lg:pb-2">
                <button
                    className="bg-white text-sorati mt-[1.1vh] lg:mt-0 py-1 lg:py-1 px-5 lg:px-10 h-[5vh] lg:text-[1.1vw] lg:font-semibold rounded-xl transbot">مشاهده
                    بیشتر
                </button>
            </div>

        </div>
    );

}

const BodyProducs: React.FC<productes> = ({src, title, price, takhfif}: productes) => {


    if (takhfif !== 0) {
        return (
            <div className="bg-white min-w-[55vw] h-[45vh] rounded-xl flex flex-col items-center relative
            lg:min-w-[17vw] lg:h-[40vh] ">
                <img src={src} className="min-w-[97%] h-[55%] mt-1"/>
                <p className="text-sm mt-4 font-semibold">{title}</p>
                <p dir="rtl" className="text-sm mt-4 font-semibold text-sorati">{price}</p>

                <p dir="rtl"
                   className="absolute text-sm top-[3vh] right-1 rounded-xl font-semibold text-white bg-sorati px-3 py-1">{takhfif}%</p>

            </div>
        )
    } else {

        return (
            <div className="bg-white min-w-[55vw] h-[45vh] rounded-xl flex flex-col items-center relative
            lg:min-w-[17vw] lg:h-[40vh] ">
                <img src={src} className="min-w-[97%] h-[55%] mt-1"/>
                <p className="text-sm mt-4 font-semibold">{title}</p>
                <p dir="rtl" className="text-sm mt-4 font-semibold text-sorati">{price}</p>
            </div>
        )
    }


}
export default Product;