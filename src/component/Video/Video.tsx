import React from 'react';
import im1 from '../../img/1.jpg'
import im2 from '../../img/2.jpg'
import im3 from '../../img/3.jpg'
import im4 from '../../img/4.jpg'
import im5 from '../../img/5.jpg'
import bot from '../../img/play-button.png'
import ReactDOM from "react-dom/client";

type typeimg = {
    src: string
}
const Video: React.FC = () => {
    return (
        <React.Fragment>
            <h2 dir="rtl" className="mt-11 text-xl font-bold pr-2 lg:text-2xl text-sorati">ویدیوهای پیشنهادی</h2>
            <div className="flex flex-row items-center overflow-x-scroll  h-[30vh] space-x-3 scrollH">
                <Videppost src={im1}/>
                <Videppost src={im2}/>
                <Videppost src={im3}/>
                <Videppost src={im4}/>
                <Videppost src={im5}/>
            </div>
        </React.Fragment>

    );
};
const Videppost: React.FC<typeimg> = ({src}: typeimg) => {
    const style: React.CSSProperties = {
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <div style={style} className="min-w-[60vw] lg:min-w-[21vw] h-[20vh] lg:h-[21vh] rounded-xl relative group">
            <img className="absolute top-[35%] w-[8vw] lg:w-[3.5vw] h-[4vh] lg:h[2vh] left-[43%] opacity-60 group-hover:opacity-100 group-hover:scale-150
                " src={bot}/>
        </div>
    )
}
export default Video;