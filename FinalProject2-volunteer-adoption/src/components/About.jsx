import React from 'react';
import './About.css';

import CatHero from '../assets/images/cat-hero.jpg';

function About() {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__content">
                    <div className="about__text">
                        <h2 className="about__title">Welcome to Pawsitively Cats</h2>
                        <h3 className="about__subtitle">Finding Forever Homes for Feline Friends</h3>
                        <p className="about__description">
                            Pawsitively Cats is dedicated to rescuing, rehabilitating, and rehoming cats and kittens in the Seattle area. Since long time ago, we've found loving homes for many cats who needed a second chance.
                        </p>
                        <p className="about__description">
                            Our mission is to improve the lives of cats through rescue, adoption, education, and community outreach. We believe every cat deserves a loving, responsible home where they can thrive.
                        </p>
                        <div className="adoption-steps">
                            <h3 className="steps__title">Why Adopt From Us?</h3>
                            <ul className="adoption-steps__list">
                                <li className="adoption-steps__item">
                                    <span className="step__number">01</span>
                                    <div className="step__info">
                                        <h4 className="step__title">Thoroughly Vetted Cats</h4>
                                        <p className="step__description">All our cats receive full veterinary care, vaccinations, and are spayed/neutered before adoption.</p>
                                    </div>
                                </li>
                                <li className="adoption-steps__item">
                                    <span className="step__number">02</span>
                                    <div className="step__info">
                                        <h4 className="step__title">Personality Matching</h4>
                                        <p className="step__description">We carefully assess each cat's personality to match them with the perfect forever home.</p>
                                    </div>
                                </li>
                                <li className="adoption-steps__item">
                                    <span className="step__number">03</span>
                                    <div className="step__info">
                                        <h4 className="step__title">Ongoing Support</h4>
                                        <p className="step__description">We provide post-adoption resources and are always available to answer questions.</p>
                                    </div>
                                </li>
                                <li className="adoption-steps__item">
                                    <span className="step__number">04</span>
                                    <div className="step__info">
                                        <h4 className="step__title">Community Focus</h4>
                                        <p className="step__description">Your adoption fee helps us continue our rescue efforts and community programs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="about__image">
                        <img src={CatHero} alt="A lovely and happy white cat with yellow Cape in its forever home curiously staring at screen." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;