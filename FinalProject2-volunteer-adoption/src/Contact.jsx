import "./Contact.css";
import { useState } from "react";

import PhoneIcon from "./assets/images/icons-phone.png";
import EmailIcon from "./assets/images/icons-email.png";
import LocationIcon from "./assets/images/icons-location.png";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [petInterest, setPetInterest] = useState('');
    const [errors, setErrors] = useState({});
    const [isSent, setIsSent] = useState(false);

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (name === '') {
            isValid = false;
            errors['name'] = 'Please enter your name.';
        } else if (name.length < 2) {
            isValid = false;
            errors['name'] = 'Please enter a valid name.';
        } else {
            errors['name'] = '';
        }

        if (email === '') {
            isValid = false;
            errors['email'] = 'Please enter your email address.';
        } else {
            errors['email'] = '';
        }


        if (message === '') {
            isValid = false;
            errors['message'] = 'Please enter your message.';
        } else {
            errors['message'] = '';
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            setIsSent(true);
        }
    };

    return (
        <main id="main-content">
            <div className="contact contact__container" id="contact">
                <h2 className="contact__title">Contact Our Shelter</h2>
                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__info-item">
                            <img src={PhoneIcon} alt="A phone icon" />
                            <span>(520) 289-2747</span>
                        </div>
                        <div className="contact__info-item">
                            <img src={EmailIcon} alt="An email icon" />
                            <span>
                                <a href="https://www.paws.org/">info@paws.org</a>
                            </span>
                        </div>
                        <div className="contact__info-item">
                            <img src={LocationIcon} alt="A location icon" />
                            <span>1234 CatsHome Lane, Seattle, WA</span>
                        </div>
                        <div className="shelter__hours">
                            <h3>Shelter Hours</h3>
                            <p>Monday - Friday: 10am - 7pm</p>
                            <p>Saturday - Sunday: 9am - 5pm</p>
                        </div>
                        {isSent && <p className='contact__message'>Hi, <span>{name}</span>. Thank you for your interest in our cats! We'll get back to you as soon as possible about {petInterest ? petInterest : "adoption opportunities"}.</p>}
                    </div>

                    <form id="contact__form" onSubmit={handleSubmit}>
                        <h3 className="contact__form-title">Adoption Inquiry</h3>
                        <label htmlFor="name">Name: *</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Required"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                        
                        <label htmlFor="email">Email: *</label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Required"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                        
                        <label htmlFor="petInterest">Cat You're Interested In:</label>
                        <input
                            id="petInterest"
                            type="text"
                            placeholder="Optional"
                            value={petInterest}
                            onChange={(e) => setPetInterest(e.target.value)}
                        />
                        
                        <label htmlFor="message">Message: *</label>
                        <textarea
                            id="message"
                            rows="3"
                            placeholder="Tell us about your home and why you want to adopt"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                        
                        <div className="form__buttons">
                            <button className="form__submit" type="submit">Send Inquiry</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Contact;