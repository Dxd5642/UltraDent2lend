import { useState } from 'react';
import './body.scss';
import Hero from '../hero/Hero';
import Bottom1 from '../bottom1/Bottom1';

function Body (){
    return(
        <div className='body-parent'>
            <Hero />
            <Bottom1 />
        </div>
    )
}

export default Body