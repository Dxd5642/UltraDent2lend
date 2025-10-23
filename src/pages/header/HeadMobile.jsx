import { useState } from 'react';
import './header.scss';
import './headMobile.scss';
import iconTime from '../../assets/svg/header/time.svg';
import icon3d from '../../assets/svg/header/3d.svg';

function HeadMobile ({ className }){
    return(
        <div className={`header__head-mobile ${className || ''}`}>
            <nav className='header__nav'>
                <button className='header__nav-btn'>Цены</button>
                <button className='header__nav-btn'>О нас</button>
                <button className='header__nav-btn'>Отзывы</button>
                <button className='header__nav-btn'>Контакты</button>
            </nav>
            <div className="header__contacts">
                <div className="header__line-decorate" />
                <div className='header__contacts-block'>
                    <img src={icon3d} alt="Номер телефона" className='header__contacts-icon'/>
                    <p className='header__contacts-text'>Получить 3D-снимок <span className='header__contacts-text_green'>0₽</span><br /><a href="tel:+73433190523"><span className='header__contacts-text_black'>+7 (343) 319 - 05 - 23</span></a></p>
                </div>
                <div className="header__line-decorate" />
                <div className="header__contacts-block">
                    <img src={iconTime} alt="Время" className='header__contacts-icon'/>
                    <p className='header__contacts-text'>Время работы:<br /><span className='header__contacts-text_black'>Ежедневно с 9:00 до 20:00</span></p>
                </div>
                <div className='header__line-decorate' />
                <button className='header__btn-request'>Запись на прием</button>
            </div>
        </div>
    )
}

export default HeadMobile;