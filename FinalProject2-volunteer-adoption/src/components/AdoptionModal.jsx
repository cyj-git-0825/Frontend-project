import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './AdoptionModal.css';

const AdoptionModal = forwardRef(({ cat, onClose }, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [hasPets, setHasPets] = useState('no');
    const [petDetails, setPetDetails] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const dialogRef = React.useRef(null);

    const showPetDetails = hasPets === 'yes';

    useImperativeHandle(ref, () => ({
        showModal: () => {
            if (dialogRef.current) {
                dialogRef.current.showModal();
                resetForm();
            }
        }
    }));

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setHasPets('no');
        setPetDetails('');
        setErrors({});
        setIsSubmitted(false);
    };

    const validate = () => {
        let isValid = true;
        let newErrors = {};

        if (name.trim() === '') {
            isValid = false;
            newErrors.name = 'Please enter your name';
        }

        if (email.trim() === '') {
            isValid = false;
            newErrors.email = 'Please enter your email';
        }

        if (phone.trim() === '') {
            isValid = false;
            newErrors.phone = 'Please enter your phone number';
        }

        if (hasPets === 'yes' && petDetails.trim() === '') {
            isValid = false;
            newErrors.petDetails = 'Please provide details about your current pets';
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
        }
    };

    const handleClose = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
            resetForm();
        }
        if (onClose) {
            onClose();
        }
    };

    return (
        <dialog ref={dialogRef} className="adoption-modal">
            {cat && (
                <div className="adoption-modal__container">
                    <button 
                        className="adoption-modal__close" 
                        onClick={handleClose}
                        aria-label="Close modal"
                        type="button"
                    >
                        &times;
                    </button>
                    
                    {isSubmitted ? (
                        <div className="adoption-modal__success">
                            <h2 className="adoption-modal__success-title">Thank You!</h2>
                            <p className="adoption-modal__success-message">
                                Your application to adopt {cat.name} has been submitted. 
                                We'll contact you within 1-2 business days to discuss next steps.
                            </p>
                            <button 
                                className="adoption-modal__success-button"
                                onClick={handleClose}
                                type="button"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="adoption-modal__header">
                                <h2 className="adoption-modal__title">Adopt {cat.name}</h2>
                                <div className="adoption-modal__cat-info">
                                    <img 
                                        src={cat.image} 
                                        alt={cat.name} 
                                        className="adoption-modal__cat-image" 
                                    />
                                    <div className="adoption-modal__cat-details">
                                        <p><strong>Age:</strong> {cat.age}</p>
                                        <p><strong>Gender:</strong> {cat.gender}</p>
                                        <p><strong>Personality:</strong> {cat.tags.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <form className="adoption-modal__form" onSubmit={handleSubmit}>
                                <h3 className="adoption-modal__form-title">Adoption Application</h3>
                                
                                <div className="adoption-modal__form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {errors.name && <span className="adoption-modal__error">{errors.name}</span>}
                                </div>
                                
                                <div className="adoption-modal__form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        id="email"
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <span className="adoption-modal__error">{errors.email}</span>}
                                </div>
                                
                                <div className="adoption-modal__form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        id="phone"
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    {errors.phone && <span className="adoption-modal__error">{errors.phone}</span>}
                                </div>
                                
                                <div className="adoption-modal__form-group">
                                    <label>Do you currently have other pets? *</label>
                                    <div className="adoption-modal__radio-group">
                                        <label className="adoption-modal__radio-label">
                                            <input
                                                type="radio"
                                                name="hasPets"
                                                value="yes"
                                                checked={hasPets === 'yes'}
                                                onChange={() => setHasPets('yes')}
                                            />
                                            Yes
                                        </label>
                                        <label className="adoption-modal__radio-label">
                                            <input
                                                type="radio"
                                                name="hasPets"
                                                value="no"
                                                checked={hasPets === 'no'}
                                                onChange={() => setHasPets('no')}
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>
                                
                                
                                {showPetDetails && (
                                    <div className="adoption-modal__form-group">
                                        <label htmlFor="petDetails">Details about your current pets *</label>
                                        <textarea
                                            id="petDetails"
                                            rows="3"
                                            value={petDetails}
                                            onChange={(e) => setPetDetails(e.target.value)}
                                            placeholder="Please describe species, breeds, ages, and temperaments"
                                        ></textarea>
                                        {errors.petDetails && <span className="adoption-modal__error">{errors.petDetails}</span>}
                                    </div>
                                )}
                                
                                <div className="adoption-modal__form-group">
                                    <label htmlFor="message">Additional Comments</label>
                                    <textarea
                                        id="message"
                                        rows="3"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Any additional information you'd like to share"
                                    ></textarea>
                                </div>
                                
                                <div className="adoption-modal__form-actions">
                                    <button 
                                        type="submit" 
                                        className="adoption-modal__submit"
                                    >
                                        Submit Application
                                    </button>
                                    <button 
                                        type="button" 
                                        className="adoption-modal__cancel"
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            )}
        </dialog>
    );
});

export default AdoptionModal;