import '../styles/navbar.css';
//import home_icon from '../assets/home_icon.svg'

function Navbar () {
    return (
        <nav className='navbar' aria-label="Menú principal">
            <div className='description-text-box'>
                <p className='description-text'>Web Developer</p>
            </div>
            <ul className='buttons-navbar-box'>
                <li>
                    <a href='#project' className='buttons-navbar' rel="noopener noreferrer" title="Ir a Proyectos">Proyectos</a>
                </li>
                <li>
                    <a href='#stacks' className='buttons-navbar' rel="noopener noreferrer" title="Ir a Stacks">Stacks</a>
                </li>
                <li>
                    <a href='#experience' className='buttons-navbar' rel="noopener noreferrer" title="Ir a Experiencia">Experiencia</a>
                </li>
                <li>
                    <a href='#training' className='buttons-navbar' rel="noopener noreferrer" title="Ir a Formación">Formación</a>
                </li>
                <li>
                    <a href='#contactform' className='buttons-navbar' rel="noopener noreferrer" title="Ir a Contacto">Contacto</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;