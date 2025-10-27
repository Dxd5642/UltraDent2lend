import './qwiz.scss';
import checkmark from "../../assets/svg/qwiz/checkmark.svg";
import { useState } from 'react';


function QwizQuestion({
    numberQuestion, 
    question, 
    answer1,
    answer2,
    answer3,
    answer4,
    imgUrlAnswer1="#",
    imgUrlAnswer2="#",
    imgUrlAnswer3="#",
    imgUrlAnswer4="#",
    selectedAnswer = null,
    onAnswerSelect = null,
}){
    const isControlled = onAnswerSelect !== null;
    
    const [internalActiveAnswer, setInternalActiveAnswer] = useState(null);
    
    const activeAnswer = isControlled ? selectedAnswer : internalActiveAnswer;

    const handleAnswerClick = (answerIndex) => {
        const newActiveAnswer = activeAnswer === answerIndex ? null : answerIndex;
        
        if (isControlled) {
            onAnswerSelect(newActiveAnswer);
        } else {
            setInternalActiveAnswer(newActiveAnswer);
        }
    };

    const answers = [
        { text: answer1, img: imgUrlAnswer1 },
        { text: answer2, img: imgUrlAnswer2 },
        { text: answer3, img: imgUrlAnswer3 },
        { text: answer4, img: imgUrlAnswer4 },
    ];

    
    return(
        <div className='qwiz__question'>

            <div className="qwiz__question-title">
                <h4 className="qwiz__question-title--1">Вопрос {numberQuestion}</h4>
                <h4 className="qwiz__question-title--2">{question}</h4>
            </div>

            <div className='qwiz__question-answers'>

                {answers.map((answer, index) => (
                    <div 
                        key={index}
                        className={`qwiz__question-answers--item ${activeAnswer === index ? 'active' : ''}`}
                        onClick={() => handleAnswerClick(index)}
                    >
                        <div 
                            className="qwiz__question--img" 
                            style={{backgroundImage: `url("${answer.img}")`}}
                        >
                            <div className='gradient'></div>
                            <img src={checkmark} alt="Галочка" className='checkmark'/>
                        </div>
                        <p className='qwiz__question-answer--text'>{answer.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QwizQuestion;