import { useState } from 'react';
import './body.scss';
import Hero from '../hero/Hero';

function Body (){
    return(
        <div className='body-parent'>
            <Hero />
        </div>
    )
}

export default Body