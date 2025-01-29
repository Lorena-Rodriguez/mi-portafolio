import '../styles/footer.css';
import LinkedIn from '../assets/LinkedIn.svg';
import FooterGitHub from '../assets/FooterGitHub.svg';
import Contact from '../assets/Contact.svg';

function Footer () {

    return (
        <div className='footer'>
            <div>
            <p>
                •  Desarrolladora web especializada en Frontend  •
            </p>
            <p>
                Disponibilidad Inmediata
            </p>
            </div>
            <div>
                <img src={LinkedIn} />
                <img src={FooterGitHub} />
                <img src={Contact} />
            </div>
            <div>
                <p>
                © 2024 Lorena Rodríguez. Todos los derechos reservados.
                </p>
            </div>
        </div>

    );

};

export default Footer;