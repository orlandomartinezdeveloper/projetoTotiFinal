import React, { Fragment } from 'react';
import FooterCSS from '../CSS/Footer.module.css';
import LogoToti from '../Img/toti-logo-mini.jpg';
import LogoMern from '../Img/mern.png';
const Footer = () => {
    return (
        <Fragment>
            <div className={FooterCSS.geral}>
                <img src={LogoToti} alt="Logo da Toti" className={FooterCSS.logoToti} />
                <p className={FooterCSS.textFooter}>APP feito pelos estudantes da Turma 8</p>
                <p className={FooterCSS.textFooter}>para o Projeto Final de Desenvolvedor</p>
                <p className={FooterCSS.textFooter}>FullStack MERN</p>
                <img src={LogoMern} alt="MERN" />
            </div>
        </Fragment>
    )
}
export default Footer;