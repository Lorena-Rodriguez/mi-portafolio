import React from 'react';
import '../styles/stacks.css';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import python from '../assets/python.svg';
import react from '../assets/react.svg';

function Stacks () {
    return (
<div className='stacks-container'>
    <div className='stackstitle'>
        <p className='stacks-text'>Habilidades Técnicas</p>
    </div>

    <section className='icons'>
        <img src={html} alt='icono html' title='HTML5' className='imgicon'/>
        <img src={css} alt='icono css' title='CSS3' className='imgicon'/>
        <img src={js} alt='icono javascript' title='JavaScript' className='imgicon'/>
        <img src={python} alt='icono python' title='Python' className='imgicon'/>
        <img src={react} alt='icono react' title='React 8' className='imgicon'/>
    </section>
</div>
    );
};

export default Stacks;