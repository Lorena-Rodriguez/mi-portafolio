import '../styles/footer.css';
import LinkedIn from '../assets/LinkedIn.svg';
import FooterGitHub from '../assets/FooterGitHub.svg';
import Contact from '../assets/Contact.svg';

function Footer () {

    return (
        <div className='footer'>
            <div className='footertext'>
            <p className='finaltextparraf'>
                •  Desarrolladora web especializada en Frontend  •
            </p>
            <p>
                Disponibilidad Inmediata
            </p>
            </div>
            <div className='logosfooter'>
                <a href='https://www.linkedin.com/in/lorenarodriguezcortes/' target="_blank" rel="noopener noreferrer"> <img src={LinkedIn} /></a>
                <a href='https://github.com/Lorena-Rodriguez' target="_blank" rel="noopener noreferrer"> <img src={FooterGitHub} /></a>
                <img src={Contact} />
            </div>
            <div className='rightstextfooter'>
                <p className='rightsparraffooter'>
                © 2024 Lorena Rodríguez. Todos los derechos reservados.
                </p>
            </div>
        </div>

    );

};

export default Footer;