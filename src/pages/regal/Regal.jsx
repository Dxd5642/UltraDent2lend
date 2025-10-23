import './regal.scss';
import star from "../../assets/images/regal/star.png";
import checkmark from '../../assets/svg/regal/checkmark.svg';

function Regal(){
    return(
        <div className='regal'>
            <div className='container'>
                <div className="regal__content">
                    <div className='regal__main-img'/>
                    <div className='regal__widgets'>
                        <div className='regal__widget'>
                            <img src={star} alt="Кубок" className='regal__widget--img'/>
                            <p className='regal__widget--text'>
                                <b>Первая в России</b> сеть стоматологий
                                с сертификатом <b>независимого</b> агентства экспертизы и консалтинга
                                «Мед Эксперт Консалт»
                            </p>
                        </div>
                        <div className='regal__info'>
                            <h3 className='regal__title'>Получите всю челюсть с приживаемостью <span className='regal__title_green'>99,8%</span> у экспертов мирового уровня</h3>
                            <div className='regal__checkbox'>
                                <img src={checkmark} alt="Галочка" className='regal__checkbox--img'/>
                                <p className='regal__chackbox--text'><b>Гарантия на работу врача</b><br />в 10 раз больше, чем по Минздрав</p>
                            </div>
                            <div className='regal__checkbox'>
                                <img src={checkmark} alt="Галочка" className='regal__checkbox--img'/>
                                <p className='regal__chackbox--text'><b>Импланты с гарантией 100 лет</b><br />7 систем под ваш случай и бюджет</p>
                            </div>
                            <div className='regal__checkbox'>
                                <img src={checkmark} alt="Галочка" className='regal__checkbox--img'/>
                                <p className='regal__chackbox--text'><b>Углубленная диагностика</b><br />костей и мягких тканей челюсти</p>
                            </div>
                            <div className='regal__checkbox'>
                                <img src={checkmark} alt="Галочка" className='regal__checkbox--img'/>
                                <p className='regal__chackbox--text'><b>Ускоренное приживление</b><br />за счёт точной установки до 0,1 мм</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regal