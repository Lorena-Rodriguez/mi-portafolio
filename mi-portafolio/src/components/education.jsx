import '../styles/education.css'

function Education () {
    return (
<>
<div className='educationcontainer'>

        <div >
            <div className='titleeducationcontainer'> 
            <p className='title-text-education'>
                Formación Reglada
            </p>
            </div>

            <div className='centralblockeducation'>
            <p>
            Bachillerato Humanidades - I.E.S. Jardines de Puerta Oscura - octubre 1995 / mayo 2005
            </p>
            {/* <p>
            Inglés: B1 - Cambridge - septiembre 2020
            </p> */}
            </div>

        </div>

        <div className='titlecoursescontainer'>
            <p className='title-text-courses'>
                Cursos
            </p>
        </div>
    <div className='coursesall'>
        <div className='leftcoursesblock'>
                <div>
                    <h3 className='secondtitlecourses'>
                    Desarrollo Web
                    </h3>
                    <h4 className='thirdtitlecourses'>
                    JavaScript Moderno | En curso.
                    </h4>
                        <p>
                        Curso impartido por Udemy de Javascript, actualizado a 2025.
                        </p>
                </div>

                <div>
                    <h4>
                    BOOTCAMP Desarrollo Web Fullstack | 2024 - 850 horas
                    </h4>
                        <p>
                        Bootcamp de Desarrollo Web Full Stack Impartido por Asociación Arrabal en formato híbrido donde se desarrollaron las siguientes aptitudes: Web Services API · Capacidad de razonamiento · Scrum · Frameworks de JavaScript · Figma · Desarrollo web · Bases de datos · React.js · Metodologías ágiles · Bootstrap · Python · SQL · Diseño de la interfaz de usuario · HTML5 · Control de versiones · JavaScript · React Hooks · MySQL · Trello · Gestión de proyectos · GitHub · CSS3
                        </p>
                </div>

                <div>
                    <h4>
                    Python | 2024 - 200 horas
                    </h4>
                        <p>
                        Curso de Introducción a la Programación impartido por “Códigofacilito” en formato Bootcamp online asíncrono, usando el lenguaje Python.
                        </p>
                </div>

                <div>
                    <h4>
                    Curso Introducción a la Programación | 200 horas
                    </h4>
                        <p>
                        Curso impartido por IBM, online: HTML, CSS, Python. 
                        </p>
                </div>
        </div>
        <div className='rightcoursesblock'>
            <div>
                <h3 className='secondtitlecourses'>
                Diseño Web
                </h3>
                    <h4>
                    Diseño Web y Multimedia | 384 horas
                    </h4>
                        <p>
                        Curso dedicado al conocimiento de la estructura de interfaz y elementos de diseño web y multimedia, diseño e implementación de la estructura de un sitio web, tratamiento informatizado de imágenes, programación de diseños interactivos y animaciones multimedia (HTML, CSS, Flash).
                        </p>
            </div>
            
            <div>
                <p className='secondtitlecourses'>
                Diseño Gráfico
                </p>
                    <h4>
                    Técnico Auxiliar en Diseño Industrial | 650 horas
                    </h4>
                        <p>
                        Curso dedicado al conocimiento de procesos de fabricación en diseño industrial, elaboración de maquetas volumétricas, Autocad, Photoshop, documentación técnica del proyecto.
                        </p>
            </div>

            <div> 
                <h4>Técnico Auxiliar en Diseño Gráfico | 604 horas
                </h4>
                    <p>
                    Curso dedicado al conocimiento del lenguaje y diseño gráfico, procesos de producción gráfica, Photoshop, Illustrator, Indesign.
                    </p>
            </div>
        </div>
    </div>
</div>
</>

    );

};

export default Education;