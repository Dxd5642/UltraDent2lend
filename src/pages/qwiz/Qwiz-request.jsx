import { useState, useRef, useEffect } from 'react';

function QwizRequest({ answeredQuestions, selectedAnswers, className }) {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: ''
    });
    const [agreeActive, setAgreeActive] = useState(true);
    const [errors, setErrors] = useState({});
    
    const nameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
    const phoneInputRef = useRef(null);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const handlePhoneChange = (e) => {
        const input = e.target;
        const newValue = input.value;
        const oldValue = formData.phone;
        
        const isAdding = newValue.length > oldValue.length;
        
        if (isAdding) {
            let value = newValue.replace(/\D/g, '');
            
            if (value === '') {
                handleInputChange('phone', '');
                return;
            }

            if (value.startsWith('7')) {
                value = value.substring(1);
            }
            
            if (value.length > 10) {
                handleInputChange('phone', oldValue);
                return;
            }
            
            let formattedValue = '+7';
            
            if (value.length > 0) {
                formattedValue += ' (' + value.substring(0, 3);
            }
            if (value.length > 3) {
                formattedValue += ') ' + value.substring(3, 6);
            }
            if (value.length > 6) {
                formattedValue += '-' + value.substring(6, 8);
            }
            if (value.length > 8) {
                formattedValue += '-' + value.substring(8, 10);
            }
            
            handleInputChange('phone', formattedValue);
        } else {
            handleInputChange('phone', newValue);
        }
    };

    const toggleAgreeActive = () => {
        setAgreeActive(!agreeActive);
        if (errors.agree) {
            setErrors(prev => ({
                ...prev,
                agree: ''
            }));
        }
    };

    const createRequestQwiz = () => {
        if (agreeActive){
            const newErrors = {};
            
            if (!formData.name.trim()) {
                newErrors.name = 'Поле не заполнено';
            }
            
            if (!formData.lastName.trim()) {
                newErrors.lastName = 'Поле не заполнено';
            }
            
            if (!formData.phone.trim()) {
                newErrors.phone = 'Поле не заполнено';
            } else if (formData.phone.replace(/\D/g, '').length < 11) {
                newErrors.phone = 'Неверный формат телефона';
            }
            
            
            setErrors(newErrors);
            
            if (Object.keys(newErrors).length === 0) {
                const requestCall = {
                    name: formData.name.trim(),
                    lastName: formData.lastName.trim(),
                    phone: formData.phone.replace(/\D/g, ''),
                    question1: selectedAnswers[0],
                    question2: selectedAnswers[1],
                    question3: selectedAnswers[2],
                    question4: selectedAnswers[3],
                };
                
                console.log('Отправка данных:', requestCall);
                
                setFormData({
                    name: '',
                    lastName: '',
                    phone: ''
                });
                setAgreeActive(true);
            }
        }
    };

    return(
        <div className={`qwiz__question qwizRequest ${className || ''}`}>
            <div className="qwizRequest__title-block">
                <h4 className="qwizRequest__title-text">Оставьте номер телефона </h4>
                <p className="qwizRequest__title-text--small">чтобы получить расчёт стоимости имплантации и закрепить скидку</p>
            </div>
            <div className="qwizRequest__input-block">
                <div className={`qwizRequest__input qwizRequest__input--name ${errors.name ? 'unapprecial' : ''}`}>
                    <p className="qwizRequest__input-text">Введите ваше имя</p>
                    <input 
                        type="text" 
                        className="qwizRequest__input-form" 
                        placeholder={errors.name || "Введите ваше имя"}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        ref={nameInputRef}
                    />
                </div>
                <div className={`qwizRequest__input qwizRequest__input--famaly ${errors.lastName ? 'unapprecial' : ''}`}>
                    <p className="qwizRequest__input-text">Введите вашу фамилию</p>
                    <input 
                        type="text" 
                        className="qwizRequest__input-form" 
                        placeholder={errors.lastName || "Введите вашу фамилию"}
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        ref={lastNameInputRef}
                    />
                </div>
                <div className={`qwizRequest__input qwizRequest__input--num ${errors.phone ? 'unapprecial' : ''}`}>
                    <p className="qwizRequest__input-text">Введите ваш телефон</p>
                    <input 
                        type="tel" 
                        className="qwizRequest__input-form" 
                        placeholder={errors.phone || "+7 (___) - ___ - __ - __"}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        ref={phoneInputRef}
                    />
                </div>
                <button 
                    className={`qwizRequest__btn-send ${agreeActive ? "" : "disabled"}`} 
                    onClick={createRequestQwiz}
                >
                    Получить расчёт
                </button>
                <div className={`qwizRequest__toggleAgree ${errors.agree ? 'unapprecial' : ''}`}>
                    <div 
                        className={`qwizRequest__toggleAgree--togle ${agreeActive ? '' : 'disabled'}`} 
                        onClick={toggleAgreeActive}
                    >
                        <div className="qwizRequest__toggleAgree--circle"/>
                    </div>
                    <p className="qwizRequest__toggleAgree--text">
                        Оставляя заявку, я даю свое согласие на обработку персональных данных
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QwizRequest