import React from 'react';
import {SplideSlide, Splide} from "@splidejs/react-splide";
import img1 from '../../img/ban1.jpg'
import img2 from '../../img/ban2.jpg'
import img3 from '../../img/ban3.jpg'
import img4 from '../../img/ban4.jpg'
import Mimg1 from '../../img/Mban1.jpg'
import Mimg2 from '../../img/Mban2.jpg'
import Mimg3 from '../../img/Mban3.jpg'
import Mimg4 from '../../img/Mban4.jpg'
import '@splidejs/react-splide/css';


const Banner: React.FC = () => {
    return (
        <Splide  options={{rewind: true}} aria-label="React Splide Example">
            <SplideSlide >
                <img className="lg:h-[68vh] lg:block hidden"  src={img1} alt="image1"/>
                <img className="lg:h-[68vh] lg:hidden block" src={Mimg1} alt="image1"/>
            </SplideSlide>
            <SplideSlide>
                <img className="lg:h-[68vh] lg:block hidden" src={img2} alt="image2"/>
                <img className="lg:h-[68vh] lg:hidden block" src={Mimg2} alt="image2"/>
            </SplideSlide>
            <SplideSlide>
                <img className="lg:h-[68vh] lg:block hidden" src={img3} alt="image3"/>
                <img className="lg:h-[68vh] lg:hidden block" src={Mimg3} alt="image3"/>
            </SplideSlide>
            <SplideSlide>
                <img className="lg:h-[68vh] lg:block hidden" src={img4} alt="image4"/>
                <img className="lg:h-[68vh] lg:hidden block" src={Mimg4} alt="image4"/>
            </SplideSlide>
        </Splide>
    );
};

export default Banner;