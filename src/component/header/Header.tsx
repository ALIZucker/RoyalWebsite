import React, {FC, useState} from 'react';
import img from '../../img/heading1.gif'
import HeaderDesktop from "./HeaderDesktop";
const Header: FC = () => {
    return (
        <div>
            <img className="h-[4.5vh] object-cover  lg:w-[100%] lg:h-[7.5vh]" src={img}/>
            <MobileHead/>
            <HeaderDesktop/>
        </div>
    );
};
const MobileHead: FC = () => {
    const [text, settext] = useState<string>("")

    const changetextHanlder = (event: React.ChangeEvent<HTMLInputElement>): any => {
        settext(event.target.value);
    }

    return (
        <div className="flex flex-col lg:hidden">
            <section className="flex flex-row justify-between items-center m-faseledore">
                <div className="flex flex-row justify-around space-x-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-[7vw] h-[4vh] ">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-[7vw] h-[4vh]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                    </svg>
                </div>
                <h1 className="text-3xl font-bold">ROYA</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-[7vw] h-[4vh]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>


            </section>
            <hr/>
            <section>
                <input className="inputM" type="text" value={text} onChange={changetextHanlder}
                       placeholder="جست و جو ..."/>
            </section>
            <hr className="mt-3"/>
        </div>
    )
}
export default Header;