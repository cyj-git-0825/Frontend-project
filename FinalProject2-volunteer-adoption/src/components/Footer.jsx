import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__section">
                        <h3 className="footer__title">Pawsitively Cats</h3>
                        <p className="footer__description">
                            Dedicated to rescuing, rehabilitating, and rehoming cats in the Seattle area.
                        </p>
                    </div>
                    
                    <div className="footer__section">
                        <h3 className="footer__title">Contact Us</h3>
                        <p className="footer__info">1234 CatsHome Lane, Seattle, WA</p>
                        <p className="footer__info">(206) 555-7890</p>
                        <p className="footer__info">info@pawsitivelycats.org</p>
                    </div>
                    
                    <div className="footer__section">
                        <h3 className="footer__title">Hours</h3>
                        <p className="footer__info">Monday - Friday: 10am - 7pm</p>
                        <p className="footer__info">Saturday - Sunday: 9am - 5pm</p>
                    </div>
                    
                    <div className="footer__section">
                        <h3 className="footer__title">Follow Us</h3>
                        <div className="footer__social">
                            <a href="https://www.facebook.com/azgives/" className="social__link">Facebook</a>
                            <a href="https://www.linkedin.com/company/az-impact-for-good/" className="social__link">Linkedin</a>
                            <a href="https://www.instagram.com/azgives/" className="social__link">Instagram</a>
                        </div>
                    </div>
                </div>
                
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {new Date().getFullYear()} Design - YJ.C
                    </p>
                    <p>Icons by <a target="_blank" href="https://fonts.google.com">fonts.google.com</a></p>
                    <p>Picture by <a target="_blank" href="http://unsplash.com"></a>unsplash.com</p>
                    <p className="footer__tagline">
                        Helping cats find their forever homes, one paw at a time.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;