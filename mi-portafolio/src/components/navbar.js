import '../styles/navbar.css';
import home_icon from '../assets/home_icon.svg'

function Navbar () {
    return (

    <div className='navbar'>

    <div className='description-text-box'>
    <p className='description-text'>Web Developer</p>
    </div>
    

    <div className='icon-home'>
        <img src={home_icon} className='image-icon-navbar' />
    </div>

    <div className='buttons-navbar-box'>
        <button className='buttons-navbar'>LinkedIn</button>
        <button className='buttons-navbar'>Github</button>
        <button className='buttons-navbar'>CV</button>
        <button className='buttons-navbar'>Contacto</button>
    </div>

    </div>

    );
};

export default Navbar;