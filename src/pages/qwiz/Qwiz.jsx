import './qwiz.scss';
import arrow from '../../assets/svg/qwiz/arrow.svg';
import arrow_hover from '../../assets/svg/qwiz/arrow_hover.svg';
import arrow_active from '../../assets/svg/qwiz/arrow_active.svg';

import QwizQuestion from './Qwiz-question';
import imgAnswer1 from '../../assets/images/qwiz/answer1.png';
import imgAnswer2 from '../../assets/images/qwiz/answer2.png';
import imgAnswer3 from '../../assets/images/qwiz/answer3.png';
import imgAnswer4 from '../../assets/images/qwiz/answer4.png';
import QwizRequest from './Qwiz-request';

import { useState } from 'react';

function QwizBackup(){
    return (
        <div className='qwiz'>
            <div className='container'>
                <div className="qwiz__content">
                    <div className='qwiz__title-block'>
                        <h3 className="qwiz__title--text">Рассчитайте стоимость</h3>
                        <h3 className="qwiz__title--text qwiz__title--text_small">и</h3>
                        <h3 className="qwiz__title--text qwiz__title--text_white">закрепите цену со скидкой</h3>
                        <h3 className="qwiz__title--text qwiz__title--text_green">по акции</h3>
                    </div>

                    <div className='qwiz__qwiz-block'>
                        <div className='qwiz__qwiz--title-block'>
                            <h3 className='qwiz__qwiz--title-text'>Ответьте на 4 вопроса, чтобы получить в подарки:</h3>
                            <p className='qwiz__qwiz--title-text qwiz__qwiz--title-text_green'>КТ и удаление зубов при лечении в клинике — 0 ₽</p>
                            <p className='qwiz__qwiz--title-text qwiz__qwiz--title-text_green'>Консультация имплантолога и план лечения — 0 ₽</p>
                        </div>
                        <div className='qwiz__interactive-menu'>
                            <div className='qwiz__pagination'>
                                <div className="qwiz__pagination--item"></div>
                                <div className="qwiz__pagination--item"></div>
                                <div className="qwiz__pagination--item"></div>
                                <div className="qwiz__pagination--item"></div>
                            </div>
                            
                            <div className="qwiz__main-window">
                                <div className='qwiz__elastic-window'>
                                    <QwizQuestion 
                                        numberQuestion={1} 
                                        question={'Какую челюсть нужно восстановить?'} 
                                        answer1={'Верхнюю'} imgUrlAnswer1={imgAnswer1}
                                        answer2={'Нижнюю'} imgUrlAnswer2={imgAnswer2}
                                        answer3={'Обе'} imgUrlAnswer3={imgAnswer3}
                                        answer4={'Нужна консультация'} imgUrlAnswer4={imgAnswer4}
                                    />
                                    <QwizQuestion 
                                        numberQuestion={2} 
                                        question={'Какую челюсть нужно восстановить?'} 
                                        answer1={'Верхнюю'} imgUrlAnswer1={imgAnswer1}
                                        answer2={'Нижнюю'} imgUrlAnswer2={imgAnswer2}
                                        answer3={'Обе'} imgUrlAnswer3={imgAnswer3}
                                        answer4={'Нужна консультация'} imgUrlAnswer4={imgAnswer4}
                                    />
                                    <QwizQuestion 
                                        numberQuestion={3} 
                                        question={'Какую челюсть нужно восстановить?'} 
                                        answer1={'Верхнюю'} imgUrlAnswer1={imgAnswer1}
                                        answer2={'Нижнюю'} imgUrlAnswer2={imgAnswer2}
                                        answer3={'Обе'} imgUrlAnswer3={imgAnswer3}
                                        answer4={'Нужна консультация'} imgUrlAnswer4={imgAnswer4}
                                    />
                                    <QwizQuestion 
                                        numberQuestion={4} 
                                        question={'Какую челюсть нужно восстановить?'} 
                                        answer1={'Верхнюю'} imgUrlAnswer1={imgAnswer1}
                                        answer2={'Нижнюю'} imgUrlAnswer2={imgAnswer2}
                                        answer3={'Обе'} imgUrlAnswer3={imgAnswer3}
                                        answer4={'Нужна консультация'} imgUrlAnswer4={imgAnswer4}
                                    />
                                </div>
                            </div>

                            <div className='qwiz__nav'>
                                <button className="qwiz__nav-btn qwiz__nav-btn-back">
                                    <img src={arrow} alt="" className='qwiz__nav-btn--icon'/>
                                    <img src={arrow_hover} alt="" className='qwiz__nav-btn--icon qwiz__nav-btn--icon_hover'/>
                                    <img src={arrow_active} alt="" className='qwiz__nav-btn--icon qwiz__nav-btn--icon_active'/>
                                    <p className='qwiz__nav-btn--text'>Назад</p></button>
                                <button className="qwiz__nav-btn qwiz__nav-btn-next">
                                    <p className='qwiz__nav-btn--text'>Далее</p>
                                    <img src={arrow} alt="" className='qwiz__nav-btn--icon'/>
                                    <img src={arrow_hover} alt="" className='qwiz__nav-btn--icon qwiz__nav-btn--icon_hover'/>
                                    <img src={arrow_active} alt="" className='qwiz__nav-btn--icon qwiz__nav-btn--icon_active'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Qwiz(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showRequest, setShowRequest] = useState(false);
    
    const questions = [
        {
            numberQuestion: 1,
            question: 'Какую челюсть нужно восстановить?',
            answer1: 'Верхнюю', imgUrlAnswer1: imgAnswer1,
            answer2: 'Нижнюю', imgUrlAnswer2: imgAnswer2,
            answer3: 'Обе', imgUrlAnswer3: imgAnswer3,
            answer4: 'Нужна консультация', imgUrlAnswer4: imgAnswer4,
        },
        {
            numberQuestion: 2,
            question: 'Сколько зубов нужно восстановить?',
            answer1: '1-2 зуба', imgUrlAnswer1: imgAnswer1,
            answer2: '3-5 зубов', imgUrlAnswer2: imgAnswer2,
            answer3: '6+ зубов', imgUrlAnswer3: imgAnswer3,
            answer4: 'Полностью', imgUrlAnswer4: imgAnswer4,
        },
        {
            numberQuestion: 3,
            question: 'Какой бюджет планируете?',
            answer1: 'До 50 000₽', imgUrlAnswer1: imgAnswer1,
            answer2: '50 000 - 100 000₽', imgUrlAnswer2: imgAnswer2,
            answer3: '100 000 - 200 000₽', imgUrlAnswer3: imgAnswer3,
            answer4: 'Не ограничен', imgUrlAnswer4: imgAnswer4,
        },
        {
            numberQuestion: 4,
            question: 'Когда планируете начать лечение?',
            answer1: 'В течение недели', imgUrlAnswer1: imgAnswer1,
            answer2: 'В течение месяца', imgUrlAnswer2: imgAnswer2,
            answer3: 'В течение 3 месяцев', imgUrlAnswer3: imgAnswer3,
            answer4: 'Пока изучаю варианты', imgUrlAnswer4: imgAnswer4,
        }
    ];

    const handleAnswerSelect = (questionIndex, answerIndex) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionIndex]: answerIndex
        }));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1 && isAnswerSelected(currentQuestion)) {
            setCurrentQuestion(prev => prev + 1);
        } else if (currentQuestion === questions.length - 1 && isAnswerSelected(currentQuestion)) {
            setShowRequest(true);
        }
    };

    const handleBack = () => {
        if (showRequest) {
            setShowRequest(false);
        } else if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const isAnswerSelected = (questionIndex) => {
        return selectedAnswers[questionIndex] !== undefined && selectedAnswers[questionIndex] !== null;
    };

    const isNextDisabled = !isAnswerSelected(currentQuestion) && !showRequest;

    const elasticWindowStyle = {
        transform: showRequest 
            ? `translateX(-${questions.length * 100}%)`
            : `translateX(-${currentQuestion * 100}%)`,
        transition: 'transform 0.3s ease-in-out'
    };

    const answeredQuestionsCount = Object.keys(selectedAnswers).length;

    return (
        <div className='qwiz'>
            <div className='container'>
                <div className="qwiz__content">
                    <div className='qwiz__title-block'>
                        <h3 className="qwiz__title--text">Рассчитайте стоимость</h3>
                        <h3 className="qwiz__title--text qwiz__title--text_small">и</h3>
                        <h3 className="qwiz__title--text qwiz__title--text_white">закрепите цену со скидкой</h3>
                        <h3 className="qwiz__title--text qwiz__title--text_green">по акции</h3>
                    </div>

                    <div className={`qwiz__qwiz-block ${showRequest ? "lastBlock" : ""}`}>
                        <div className='qwiz__qwiz--title-block'>
                            <h3 className='qwiz__qwiz--title-text'>Ответьте на 4 вопроса, чтобы получить в подарки:</h3>
                            <p className='qwiz__qwiz--title-text qwiz__qwiz--title-text_green'>КТ и удаление зубов при лечении в клинике — 0 ₽</p>
                            <p className='qwiz__qwiz--title-text qwiz__qwiz--title-text_green'>Консультация имплантолога и план лечения — 0 ₽</p>
                        </div>

                        <div className='qwiz__interactive-menu'>
                            <div className='qwiz__pagination'>
                                {questions.map((_, index) => (
                                    <div 
                                        key={index}
                                        className={`qwiz__pagination--item ${
                                            isAnswerSelected(index) ? 'answered' : ''
                                        } ${index === currentQuestion && !showRequest ? 'active' : ''}`}
                                    ></div>
                                ))}
                            </div>
                            
                            <div className="qwiz__main-window">
                                <div className='qwiz__elastic-window' style={elasticWindowStyle}>
                                    {questions.map((questionData, index) => (
                                        <QwizQuestion 
                                            key={index}
                                            numberQuestion={questionData.numberQuestion} 
                                            question={questionData.question} 
                                            answer1={questionData.answer1} imgUrlAnswer1={questionData.imgUrlAnswer1}
                                            answer2={questionData.answer2} imgUrlAnswer2={questionData.imgUrlAnswer2}
                                            answer3={questionData.answer3} imgUrlAnswer3={questionData.imgUrlAnswer3}
                                            answer4={questionData.answer4} imgUrlAnswer4={questionData.imgUrlAnswer4}
                                            selectedAnswer={selectedAnswers[index]}
                                            onAnswerSelect={(answer) => handleAnswerSelect(index, answer)}
                                        />
                                    ))}
                                    <QwizRequest 
                                        answeredQuestions={answeredQuestionsCount}
                                        selectedAnswers={selectedAnswers}
                                        className={showRequest ? "active" : ""}
                                    />
                                </div>
                            </div>

                            {!showRequest && (
                                <div className='qwiz__nav'>
                                    <button 
                                        className={`qwiz__nav-btn qwiz__nav-btn-back ${currentQuestion === 0 ? 'disabled' : ''}`}
                                        onClick={handleBack}
                                        disabled={currentQuestion === 0}>
                                        <img src={arrow} alt="" className='qwiz__nav-btn--icon'/>
                                        <img src={arrow_hover} alt="" className='qwiz__nav-btn--icon qwiz__nav-btn--icon_hover'/>
                                        <img src={arrow_active} alt="" className='qwiz__nav-btn--icon qwiz__nav-btn--icon_active'/>
                                        <p className='qwiz__nav-btn--text'>Назад</p>
                                    </button>

                                    <button 
                                        className={`qwiz__nav-btn qwiz__nav-btn-next ${isNextDisabled ? 'disabled' : ''}`}
                                        onClick={handleNext}
                                        disabled={isNextDisabled}>
                                        <p className='qwiz__nav-btn--text'>
                                            {currentQuestion === questions.length - 1 ? 'Завершить' : 'Далее'}
                                        </p>
                                        <img src={arrow} alt="" className='qwiz__nav-btn--icon'/>
                                        <img src={arrow_hover} alt="" className='qwiz__nav-btn--icon qwiz__nav-btn--icon_hover'/>
                                        <img src={arrow_active} alt="" className='qwiz__nav-btn--icon qwiz__nav-btn--icon_active'/>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qwiz