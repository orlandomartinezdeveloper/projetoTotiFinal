import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Img/logo-huella-peq.png'
import HeaderCSS from '../CSS/Header.module.css';
import '../CSS/MenuFunction.css';
const Header = () => {
    const [tela, setTela] = useState(false);
    const [telaAzul, setTelaAzul] = useState('telaFechada');
    const [telaLetras, setTelaLetras] = useState('letrasApagadas');
    const [resolucion, setResolucion] = useState(window.innerWidth);
    useEffect(() => {
        if (resolucion >= 1200) {
            setTelaLetras('letrasLigadas');
        } else {
            setTelaLetras('letrasApagadas');
            setTelaAzul('telaFechada');
        }
    }, [resolucion])
    const Cambio = () => {
        setResolucion(window.innerWidth);
    }
    window.addEventListener('resize', Cambio);

    const Linked = () => {
        if (resolucion < 960) {
            setTelaAzul('telaFechada');
            setTelaLetras('letrasApagadas ');
            setTela(false);
        }
    }
    const abreFecha = () => {
        setTela(!tela)
        if (tela === true) {
            setTelaAzul('telaFechada ');
            setTelaLetras('letrasApagadas ');
        } else {
            setTelaAzul('telaAberta ');
            setTelaLetras('letrasLigadas');
        }
    }

    const navMenu = [
        {
            id: 0,
            name: 'Home',
            src: '/',
            logo: 'fas fa-home'
        },
        {
            id: 1,
            name: 'Animais',
            src: '/Animais',
            logo: 'fas fa-paw'
        },
        {
            id: 2,
            name: 'Somos',
            src: '/Somos',
            logo: 'fas fa-laptop-code'

        },
        {
            id: 3,
            name: 'Contato',
            src: '/Contato',
            logo: 'far fa-address-card'
        }
    ];
    return (
        <Fragment>
            <header>
                <nav>
                    <div><img src={Logo} alt="Logo AnimaDopt" className={HeaderCSS.imgMenu} /></div>
                    <div><div className={HeaderCSS.textTitulo}>AnimaDopt</div><div className={HeaderCSS.subTitulo}>Animais de Estimação</div></div>

                    <i className={"fas fa-bars " + HeaderCSS.faBars} onClick={abreFecha}></i>
                    <ul className={telaAzul}>
                        {
                            navMenu.map((item) =>
                                <li key={item.id} className={HeaderCSS.listado}><Link to={item.src} className={telaLetras} onClick={Linked}><i className={item.logo} style={{ marginRight: '10px' }}></i>{item.name}</Link></li>)
                        }
                    </ul>
                </nav>
            </header>

        </Fragment >

    )
}
export default Header;