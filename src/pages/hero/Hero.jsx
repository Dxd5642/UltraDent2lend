import { useState } from 'react';
import './hero.scss';
import imgJaw from '../../assets/images/hero/jaw.png';
import imgDoctor from '../../assets/images/hero/doctor.png';
import logoPercent from '../../assets/svg/hero/percent.svg';
import logoUSA from '../../assets/svg/hero/USA.svg';
import logoUK from '../../assets/svg/hero/UK.svg';

function Hero (){
    return(
        <div className='hero'>
            <div className='container'>
                <div className='hero__content'>
                    <div className='hero__new-tooth'>
                        <p className='hero__text-1'>НОВЫЕ ЗУБЫ в Екатеринбурге</p>
                        <p className='hero__text-2'>ЗА 1 ДЕНЬ</p>
                        <div className='hero__text-3-block'>
                            <p className='hero__text-3'>ПО САМОЙ НИЗКОЙ ЦЕНЕ</p>
                        </div>
                        <p className='hero__text-4'>«All-on-4/6»</p>
                        <img src={imgJaw} alt="Эмпланты" className='hero__img-jaw'/>
                    </div>
                    <div className='hero__gift'>
                        <p className='hero__gift--text1'>Ответьте на 4 вопроса —</p>
                        <p className='hero__gift--text2'>Получите расчёт для вашего случая + подарки:</p>
                        <div className='hero__list'>
                            <p className='hero__list-item--text'>Консультация имплантолога и план лечения — 0 ₽</p>
                            <p className='hero__list-item--text'>КТ и удаление зубов при лечении в клинике — 0 ₽</p>
                            <p className='hero__list-item--text'>Гарантию лучшей цены на имплантацию в Екатеринбурге</p>
                        </div>
                    </div>
                    <div className='hero__doctor'>
                        <img src={imgDoctor} alt="Нестеров Алексей Евгеньевич" className='hero__img-doctor'/>
                        <p className='hero__doctor-experience'>Стаж  23+ лет</p>
                        <div className='hero__doctor-fio'>
                            <p className='hero__doctor-surname'>Нестеров</p>
                            <p className='hero__doctor-firstname'>Алексей Евгеньевич</p>
                            <p className='hero__doctor-job'>Ведущий ортопед, гнатолог, главный врач</p>
                        </div>
                        <div className='hero__doctor-promo'>
                            <p className='hero__promo--old-price'>9 000 ₽</p>
                            <p className='hero__promo--new-price'><b>от 1990 ₽ в месяц</b></p>
                            <p className='hero__promo-data'>Акция до 31 октября</p>
                        </div>
                        <div className='hero__doctor-info'>
                            <p className='hero__doctor-info--text'><img src={logoPercent} alt="" className='hero__doctor-info--logo'/>Рассрочка <b><i>0%</i></b> на <b><i>24 месяца</i></b></p>
                            <p className='hero__doctor-info--text_white'>Проводил имплантацию<br />и протезирование:</p>
                            <p className='hero__doctor-info--text'><img src={logoUSA} alt="" className='hero__doctor-info--logo'/>в клиниках США</p>
                            <p className='hero__doctor-info--text'><img src={logoUK} alt="" className='hero__doctor-info--logo'/>в клиниках Великобритании</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero