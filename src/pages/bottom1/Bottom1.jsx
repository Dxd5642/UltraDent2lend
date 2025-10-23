import { useState } from 'react';
import './bottom1.scss';
import checkMark from "../../assets/svg/bottom1/checkMark.svg";

function Bottom1(){
    return(
        <div className='bottom1'>
            <div className='container'>
                <div className='bottom1__content'>
                    <p className='bottom1__title'><span className='bottom1__title bottom1__title_white'>4 импланта</span>с установкой под ключ</p>
                    <div className='bottom1__list'>
                        <p className='bottom1__text'><img src={checkMark} alt="Галочка" className='bottom1__icon'/>Без боли</p>
                        <p className='bottom1__text'><img src={checkMark} alt="Галочка" className='bottom1__icon'/>Можно во сне</p>
                        <p className='bottom1__text'><img src={checkMark} alt="Галочка" className='bottom1__icon'/>Пожизненная гарантия</p>
                        <p className='bottom1__text'><img src={checkMark} alt="Галочка" className='bottom1__icon'/>Опыт врачей от 8 до 32 лет</p>
                        <p className='bottom1__text'><img src={checkMark} alt="Галочка" className='bottom1__icon'/>На 34% дешевле по Екатеринбургу</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom1