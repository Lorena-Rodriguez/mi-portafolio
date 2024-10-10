import '../styles/navbar.css';
import home_icon from '../assets/home_icon.svg'

function Navbar () {
    return (

    <div className='navbar'>

    <div>
    <p>Web Developer</p>
    </div>
    

    <div>
        
        <img src={home_icon} />
    </div>

    <div>
        <button>LinkedIn</button>
        <button>Github</button>
        <button>CV</button>
        <button>Contacto</button>
    </div>

    </div>

    );
};

export default Navbar;