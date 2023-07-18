import '../../components/styles/styles.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <section className="social__media">
                        <div className="social__media--wrap">
                            <div className="footer__logo">
                                <a href="/" id="footer__logo">StayFresh</a>
                            </div>
                            <small className="website__rights">© 2023 Tous droits réservés</small>
                        </div>
                    </section>
                    <div className="footer__links">
                        <div className="footer__link--wrapper">
                            <div className="footer__link--items">
                                <a href='/about'>Qui sommes-nous?</a>
                               
                            </div>
                            <div className="footer__link--items">
                                <a href='/establishments-list'>Types d'établissement</a>
                                
                            </div>
                        </div>
                        <div className="footer__link--wrapper">
                            <div className="footer__link--items">
                                <a href='/user'>Mes rendez-vous</a>
                                
                            </div>
                            <div className="footer__link--items">
                                <a href='/connexion'>Connexion</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;