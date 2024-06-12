import React, {useState} from 'react';
import HeaderDesktopBtm from "./HeaderDesktopBtm";


const HeaderDesktop: React.FC = () => {
    return (
        <div className="lg:flex flex-col space-y-2 items-center hidden">
            <section className="flex flex-row  justify-between  w-[100%] mt-3 px-5">
                <HeaderUpleft/>
                <HeaderUpRite/>
            </section>
            <hr/>
           <HeaderDesktopBtm/>
        </div>
    );
};
const HeaderUpleft: React.FC = () => {
    return (
        <div className="flex flex-row space-x-2 items-center  ">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-[5vw] h-[5vh] ">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
            </svg>
            <hr className="rotate-90 w-7"/>
            <button
                className="hover:bg-green-700 hover:text-white border-[2px] border-gray-400 rounded-2xl py-2 px-4 text-center">ورود
                / عضویت
            </button>
        </div>
    )
};

const HeaderUpRite: React.FC = () => {
    const [text2, settext2] = useState<string>("")

    const changetextHanlder = (event: React.ChangeEvent<HTMLInputElement>): any => {
        settext2(event.target.value);
    }
    return (
        <div className="flex flex-row space-x-3 items-center  ">

            <input dir="rtl" className="w-[40vw]  h-[5.7vh] rounded-xl px-4 text-right  bg-backgray" type="text"
                   value={text2} onChange={changetextHanlder}
                   placeholder="جست و جو ..."/>
            <h1 className="text-5xl font-bold">ROYA</h1>
        </div>
    )
}
export default HeaderDesktop;