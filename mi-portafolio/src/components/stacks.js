import React from 'react';
import '../styles/stacks.css';
import htmlcss from '../assets/htmlcss.svg';
import js from '../assets/js.svg';
import python from '../assets/python.svg';
import react from '../assets/react.svg';

function Stacks () {
    return (
        <div>
<div>
    <h1>Habilidades Técnicas</h1>
</div>

<section className='icons'>
    <img src={htmlcss} alt='icono html y css'/>
    <img src={js} alt='icono javascript'/>
    <img src={python} alt='icono python'/>
    <img src={react} alt='icono react'/>
</section>
</div>
    );
};

export default Stacks;