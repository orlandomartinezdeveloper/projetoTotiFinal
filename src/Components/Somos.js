import React from 'react';
import SomosCSS from '../CSS/Somos.module.css';
import imageRing from '../Img/ring.png';
import estacionamiento from '../Img/estacionamiento.jpg';
import carro1 from '../Img/carro1.png';
import mustang from '../Img/carro2.png';
import ringMustang from '../Img/ring-mustang.png';
import carro3 from '../Img/carro3.png';
import ringCarro3 from '../Img/ring-3.png';
import Maria from '../Img/mariaFoto.jpg';
import Yoelvis from '../Img/yoelvisFoto.jpg';
import Orlando from '../Img/orlandoFoto.jpg';

const Somos = () => {
    const somos = [
        {
            name: 'María Lares',
            titulo: 'Lic. Matemática',
            perfil: 'Frontend Developer',
            foto: Maria,
            linkedin: 'https://www.linkedin.com/in/maria-lares/',
            github: 'https://github.com/maferlape',
            entrada: 'animate__animated animate__slideInLeft '
        },
        {
            name: 'Orlando Martinez',
            titulo: 'Prof. Informática',
            perfil: 'Frontend Developer',
            foto: Orlando,
            linkedin: 'https://www.linkedin.com/in/orlandomartinezdeveloper/',
            github: 'https://github.com/orlandomartinezdeveloper/',
            entrada: 'animate__animated animate__slideInUp '
        },
        {
            name: 'Yoelvis A. Jiménez',
            titulo: 'Eng. Eletricista',
            perfil: 'Backend Developer',
            foto: Yoelvis,
            linkedin: 'https://www.linkedin.com/in/yoelvis-jimenez/',
            github: 'https://github.com/alfredojry',
            entrada: 'animate__animated animate__slideInRight '
        }

    ]

    return (
        <div>
            <div className={SomosCSS.containerFluid} style={{ backgroundImage: `url(${estacionamiento})` }}>
                <div className={SomosCSS.conteudo}>
                    <h1 className={SomosCSS.titulo}>Somos</h1>
                    <div className={SomosCSS.cards}>
                        {somos.map((item, index) => (
                            < div className={item.entrada + SomosCSS.card} key={index} >
                                <div className={SomosCSS.containerFotos}>
                                    <img src={item.foto} alt="Foto dos Programadores" className={SomosCSS.fotos} />
                                </div>
                                <div className={SomosCSS.dados}>
                                    <div><b>{item.name}</b></div>
                                    <div>{item.titulo}</div>
                                    <div>{item.perfil}</div>
                                    <div className={SomosCSS.redes}>
                                        <a href={item.linkedin} target="_blank" rel="noreferrer"><i className={"fab fa-linkedin-in " + SomosCSS.links}></i></a>
                                        <a href={item.github} target="_blank" rel="noreferrer"><i className={"fab fa-github " + SomosCSS.links}></i></a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className={SomosCSS.carro} >
                    <img className={SomosCSS.van} src={carro1} alt="Fusca" />
                    <div className={SomosCSS.caucho}>
                        <img src={imageRing} alt="" className={SomosCSS.ring} />
                    </div>
                    <div className={SomosCSS.caucho2}>
                        <img src={imageRing} alt="" className={SomosCSS.ring} />
                    </div>
                </div>
                <div className={SomosCSS.carro2} >
                    <img className={SomosCSS.tamMustang} src={mustang} alt="Mustang" />
                    <div className={SomosCSS.cauchoMustang}>
                        <img src={ringMustang} alt="" className={SomosCSS.ringMustang} />
                    </div>
                    <div className={SomosCSS.cauchoMustang2}>
                        <img src={ringMustang} alt="" className={SomosCSS.ringMustang} />
                    </div>
                </div>
                <div className={SomosCSS.carro3} >
                    <img className={SomosCSS.tamCarro3} src={carro3} alt="Carro" />
                    <div className={SomosCSS.cauchoCarro3}>
                        <img src={ringCarro3} alt="" className={SomosCSS.ringCarro3} />
                    </div>
                    <div className={SomosCSS.cauchoCarro32}>
                        <img src={ringCarro3} alt="" className={SomosCSS.ringCarro3} />
                    </div>
                </div>

            </div>

        </div >
    )
}
export default Somos;