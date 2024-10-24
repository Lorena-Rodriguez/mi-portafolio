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

    {/* <div className='buttons-navbar-box'>
        <button className='buttons-navbar'>LinkedIn</button>
        <button className='buttons-navbar'>Github</button>
        <button className='buttons-navbar'>CV</button>
        <button className='buttons-navbar'>Contacto</button>
    </div> */}

    <div className='buttons-navbar-box'>
        <a href='https://www.linkedin.com/in/lorenarodriguezcortes/' className='buttons-navbar'  target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href='https://github.com/Lorena-Rodriguez' className='buttons-navbar'  target="_blank" rel="noopener noreferrer">Github</a>
    </div>

    </div>

    );
};

export default Navbar;