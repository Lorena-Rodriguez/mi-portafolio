import '../styles/navbar.css';
import home_icon from '../assets/home_icon.svg'

function Navbar () {
    return (

    <div className='navbar'>

    <div className='description-text-box'>
    <p className='description-text'>Web Developer</p>
    </div>
    

    {/* <div className='icon-home'>
        <img src={home_icon} className='image-icon-navbar' />
    </div> */}

    <div className='buttons-navbar-box'>
        <a href='' className='buttons-navbar'  target="_blank" rel="noopener noreferrer">Proyectos</a>
        <a href='' className='buttons-navbar'  target="_blank" rel="noopener noreferrer">Stacks</a>
        <a href='' className='buttons-navbar'  target="_blank" rel="noopener noreferrer">Experiencia</a>
        <a href='' className='buttons-navbar' target="_blank" rel="noopener noreferrer">Formación</a>
    </div>

    </div>

    );
};

export default Navbar;