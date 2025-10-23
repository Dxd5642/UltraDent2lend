import { useState } from 'react';
import './header.scss';
import decorate from '../../assets/svg/header/headerDecorate.svg';
import logo from '../../assets/svg/header/logo.svg';
import iconTime from '../../assets/svg/header/time.svg';
import icon3d from '../../assets/svg/header/3d.svg';
import HeadMobile from './HeadMobile';

function Header (){
    const body = document.body;
    const [isMobileActive, setIsMobileActive] = useState(false);

    const toggleMobileMenu = () =>{
        setIsMobileActive(!isMobileActive);
        body.classList.toggle("no-scroll");
    };

    return(
        <header className='header'>
            <div className='container header__container'>
                <div className='header__head'>
                    <img src={logo} alt="Ультра-Дент Стоматология" />
                    <nav className='header__nav'>
                        <button className='header__nav-btn'>Цены</button>
                        <button className='header__nav-btn'>О нас</button>
                        <button className='header__nav-btn'>Отзывы</button>
                        <button className='header__nav-btn'>Контакты</button>
                    </nav>
                    <div className="header__contacts">
                        <div className="header__contacts-block">
                            <img src={iconTime} alt="Время" className='header__contacts-icon'/>
                            <p className='header__contacts-text'>Время работы:<br /><span className='header__contacts-text_black'>Ежедневно с 9:00 до 20:00</span></p>
                        </div>
                        <div className="header__line-decorate" />
                        <div className='header__contacts-block'>
                            <img src={icon3d} alt="Номер телефона" className='header__contacts-icon'/>
                            <p className='header__contacts-text'>Получить 3D-снимок <span className='header__contacts-text_green'>0₽</span><br /><a href="tel:+73433190523"><span className='header__contacts-text_black'>+7 (343) 319 - 05 - 23</span></a></p>
                        </div>
                        <div className='header__line-decorate' />
                        <button className='header__btn-request'>Запись на прием</button>
                        <button className={`header__btn-mobile-header ${isMobileActive ? 'active' : ''}`} onClick={toggleMobileMenu}>
                            <div className='header__stick'/>
                            <div className='header__stick'/>
                            <div className='header__stick'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='header__decorate'>
                <img src={decorate} alt="Угол" className='header__corner'/>
                <img src={decorate} alt="Угол" className='header__corner'/>
            </div>
            <HeadMobile className={isMobileActive ? 'active' : ''}/>
        </header>
    )
}

export default Header