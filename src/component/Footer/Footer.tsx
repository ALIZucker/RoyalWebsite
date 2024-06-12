import React from 'react';
import img1 from '../../img/f1.webp'
import img2 from '../../img/f2.webp'
import img3 from '../../img/f3.webp'

const Footer :React.FC= () => {
    return (
        <div className="flex flex-col bg-backfoot lg:flex-row-reverse lg:justify-around">
            <section dir="rtl" className="flex flex-col mt-5  space-y-10 lg:w-[32%] lg:space-y-">
                <h2 className="text-4xl font-bold mr-2">ROYA</h2>
                <p className="flex flex-row"><b>بخش اداری </b>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    </svg>

                    تهران، بلوار ميرداماد، جنب دفينه،<br/> بازار بزرگ ميرداماد، ساختمان اداری، ط 4، واحد 412                 </p>
                <p><strong>پست الکترونیکی:</strong> online@rojagroup.com </p>
            </section>
            <hr/>
            <section dir="rtl" className="flex flex-row  justify-center mt-12 lg:w-[32%]">
                <ul className="w-[40%] ml-3 space-y-9">
                    <li>تماس با ما</li>
                    <li>درباره ما</li>
                    <li>فروشگاه های رویایی</li>
                    <li>راهنمای سفارش خرید</li>
                    <li>راهنمای اسفتاده از کاره هدیه</li>
                    <li></li>
                </ul>
                <ul className="w-[40%] mr-3 space-y-9">
                    <li>حریم خصوصی</li>
                    <li>فرصت های شغلی</li>
                    <li>قوانین و مقررات</li>
                    <li>ارسال هدیه</li>
                </ul>
            </section>
            <section dir="rtl" className="px-2 lg:w-[32%]">
                <h3 className="font-bold text-2xl mt-5">زیبا بمانید</h3>
                <p className="text-justify mt-3">
                    مجموعه فروشگاه های روژا با بیش از 25 سال سابقه در ارائه محصولات با کيفيت ، مرغوب و با اصالت از برندهای معتبر جهانی مشغول به فعاليت است. هم اکنون فروشگاه اینترنتی روژا در ادامه اين رسالت و سابقه درخشان، به دنبال ارائه محصولات با کيفيت و اورجينال از برندهای معتبر خارجی و ايرانی در محيط آنلاين است. مشتريان می توانند از ميان هزاران محصول با کيفيت خارجی و داخلی آرایشی، بهداشتی و عطر ، محصول مورد نظر خود را جستجو ، بررسی و انتخاب نمايند. در فروشگاه اینترنتی روژا مشتريان عزیز می توانيد به راحتی، خرید اینترنتی لذت بخش، مطمئن و آسان را تجربه کنند و کالای مورد نظر خود را به سرعت در سراسر ایران دریافت نمایند.
                </p>

                <section className="flex flex-row justify-around mt-5 space-x-5">
                    <img className="w-[20vw] h-[14vh] rounded-2xl" src={img1}/>
                    <img  className="w-[20vw] h-[14vh] rounded-2xl" src={img2}/>
                    <img className="w-[20vw] h-[14vh] rounded-2xl" src={img3}/>
                </section>

            </section>
        </div>
    );
};

export default Footer;