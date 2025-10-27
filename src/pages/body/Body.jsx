import { useState } from 'react';
import './body.scss';
import Hero from '../hero/Hero';
import Bottom1 from '../bottom1/Bottom1';
import Regal from '../regal/Regal';
import Qwiz from '../qwiz/Qwiz';

function Body (){
    return(
        <div className='body-parent'>
            <Hero />
            <Bottom1 />
            <Regal />
            <Qwiz />
        </div>
    )
}

export default Body