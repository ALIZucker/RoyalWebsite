import img1 from './img/daste1.jpg'
import img2 from './img/daste2.jpg'
import img3 from './img/daste3.jpg'
import img4 from './img/daste4.jpg'

import md1 from './img/mdl1.jpg'
import md2 from './img/mdl2.jpg'
import md3 from './img/mdl3.jpg'
import md4 from './img/mdl4.jpg'

//------------------------------------------------------
import React, {useState} from 'react';
import './App.css';
import Heading from "./component/header/Header"
import Banner from "./component/banner/Banner";
import Daste, {Imageprops} from './component/Daste/Daste'
import Product from "./component/Product/Product";
import {DesignT, newDesign} from "./App.types"
import Tabligh from "./component/Tabligh/Tabligh";
import Video from "./component/Video/Video";
import Footer from "./component/Footer/Footer";
//-----------------------------------------------------

const arraydaste: Imageprops[] = [{src: img1}, {src: img2}, {src: img3}, {src: img4}]
const arraymdl: Imageprops[] = [{src: md1}, {src: md2}, {src: md3}, {src: md4}]

function App() {

    return (
        <React.Fragment>
            <Heading/>
            <Banner/>
            <Daste srcarr={arraydaste}/>
            <Product product={DesignT.product} backimage={DesignT.backimage} backimageD={DesignT.backimageD}
                     text={DesignT.text}/>
            <Tabligh/>
            <Product product={newDesign.product} backimage={newDesign.backimage} backimageD={newDesign.backimageD}
                     text={newDesign.text}/>
            <Daste srcarr={arraymdl}/>
            <Video/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
