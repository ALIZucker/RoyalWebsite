import React from 'react';
import mobpic1 from '../../img/mobsTab.jpg'
import mobpic2 from '../../img/mobitab2.jpg'
import tabd from '../../img/tabd.jpg'
import tabd2 from '../../img/tabd2.jpg'



const Tabligh: React.FC = () => {

    return (
        <React.Fragment>
            <section className="flex flex-col items-center lg:hidden mt-3 space-y-3">
                <img className="w-[92%] rounded-xl" src={mobpic1}/>
                <img className="w-[92%] rounded-xl" src={mobpic2}/>
            </section>
            <section className="hidden lg:flex lg:justify-around lg:flex-row lg:mt-9">
                <img className="w-[49%] rounded-xl sadowDste" src={tabd}/>
                <img className="w-[49%] rounded-xl sadowDste" src={tabd2}/>

            </section>
        </React.Fragment>
    );
};

export default Tabligh;