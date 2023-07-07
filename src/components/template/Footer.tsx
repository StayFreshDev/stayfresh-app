import '../../components/styles/styles.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__links">
                        <div className="footer__link--wrapper">
                            <div className="footer__link--items">
                                <h2>A propos de nous</h2>
                                <a href="/">Comment ça marche</a>
                                <a href="/">Témoignages</a>
                                <a href="/">Carrières</a>
                                <a href="/">Investisseurs</a>
                                <a href="/">Conditions d'utilisation</a>
                            </div>
                            <div className="footer__link--items">
                                <h2>Nous contacter</h2>
                                <a href="/">Contact</a>
                                <a href="/">Support</a>
                                <a href="/">Destinations</a>
                                <a href="/">Sponsorships</a>
                            </div>
                        </div>
                        <div className="footer__link--wrapper">
                            <div className="footer__link--items">
                                <h2>Vidéos</h2>
                                <a href="/">Envoyer une vidéo</a>
                                <a href="/">Ambassadeurs</a>
                                <a href="/">Agence</a>
                                <a href="/">Influenceurs</a>
                            </div>
                            <div className="footer__link--items">
                                <h2>Réseaux sociaux</h2>
                                <a href="/">Instagram</a>
                                <a href="/">Facebook</a>
                                <a href="/">Youtube</a>
                                <a href="/">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <section className="social__media">
                        <div className="social__media--wrap">
                            <div className="footer__logo">
                                <a href="/" id="footer__logo">StayFresh</a>
                            </div>
                            <small className="website__rights">© 2023 All rights reserved</small>
                            <div className="social__icons">
                                <a href="/" className="social__icon--link" target="_blank" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="/" className="social__icon--link" target="_blank" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="/" className="social__icon--link" target="_blank" aria-label="Youtube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="/" className="social__icon--link" target="_blank" aria-label="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="/" className="social__icon--link" target="_blank" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    )
}

export default Footer;