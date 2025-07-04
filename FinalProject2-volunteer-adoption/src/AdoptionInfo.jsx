import React from "react";
import "./AdoptionInfo.css";
import Accordion from "./components/Accordion";

function AdoptionInfo() {
    return (
        <main id="main-content">
            <div className="adoption-info" id="adoption-info">
                <div className="process__container">
                    <div className="process__text">
                        <h2 className="info__title">Adoption Process</h2>
                        <div className="process__content">
                            <div className="process__item">
                                <div className="time__span">
                                    <span>Step 1</span>
                                </div>
                                <h3 className="step">Browse Available Cats</h3>
                                <span className="description">Look through our catalog of cats waiting for their forever homes.</span>
                            </div>
                            <div className="process__item">
                                <div className="time__span">
                                    <span>Step 2</span>
                                </div>
                                <h3 className="step">Submit Application</h3>
                                <span className="description">Fill out our adoption application form with your information.</span>
                            </div>
                            <div className="process__item">
                                <div className="time__span">
                                    <span>Step 3</span>
                                </div>
                                <h3 className="step">Meet Your Match</h3>
                                <span className="description">Schedule a visit to meet the cat you're interested in adopting.</span>
                            </div>
                            <div className="process__item">
                                <div className="time__span">
                                    <span>Step 4</span>
                                </div>
                                <h3 className="step">Home Check</h3>
                                <span className="description">We'll conduct a brief home check to ensure it's safe for your new pet.</span>
                            </div>
                            <div className="process__item">
                                <div className="time__span">
                                    <span>Step 5</span>
                                </div>
                                <h3 className="step">Finalize Adoption</h3>
                                <span className="description">Complete paperwork and welcome your new family member home!</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="faqs__container">
                    <h2 className="faqs__title">Frequently Asked Questions</h2>
                    <Accordion title="What are the requirements for adopting a cat?">
                        <p className="faqs__answer">Our adoption requirements include being at least 21 years old, having proper identification, providing proof of residence, and having landlord approval if you rent. We also ask that all family members meet the cat before adoption to ensure a good match.</p>
                        <p className="faqs__answer">Additionally, we require that you have the financial means to care for a cat, including routine veterinary care, and that you're prepared for a long-term commitment. Cats can live 15-20 years, so adoption is a significant responsibility.</p>
                    </Accordion>
                    <Accordion title="What are the adoption fees?">
                        <p className="faqs__answer">Our adoption fees vary by cat age: $150 for kittens (up to 1 year), $125 for adult cats (1-7 years), and $100 for senior cats (8+ years). Special needs cats have reduced fees based on their specific requirements.</p>
                        <p className="faqs__answer">All adoption fees include spay/neuter surgery, microchipping, age-appropriate vaccinations, FIV/FeLV testing, deworming, and a vet check. This package would typically cost over $300 at a regular veterinary clinic, making adoption an excellent value while supporting our continued rescue efforts.</p>
                    </Accordion>
                    <Accordion title="Do you offer post-adoption support?">
                        <p className="faqs__answer">Yes, we provide comprehensive post-adoption support to ensure a smooth transition for both you and your new cat. This includes a follow-up check-in after 2 weeks, 1 month, and 3 months, as well as access to our adoption counselors for any questions or concerns.</p>
                        <p className="faqs__answer">We also offer resources for behavior training, recommended veterinarians in your area, and a community of fellow adopters through our social media groups. Our goal is to make sure every adoption is successful and that both you and your cat are happy together.</p>
                    </Accordion>
                    <Accordion title="What should I prepare before bringing a cat home?">
                        <p className="faqs__answer">Before bringing your new cat home, you should prepare a litter box with quality litter, food and water bowls, nutritious cat food appropriate for their age, comfortable bedding, scratching posts, toys, and a carrier for transport.</p>
                        <p className="faqs__answer">It's also important to cat-proof your home by securing loose wires, removing toxic plants, and storing dangerous chemicals out of reach. Set up a quiet space where your new cat can adjust gradually, as many cats need time to feel comfortable in a new environment.</p>
                    </Accordion>
                    <Accordion title="Can I adopt if I have other pets?">
                        <p className="faqs__answer">Yes, you can adopt if you have other pets. We carefully assess each cat's compatibility with other animals and can recommend cats that have lived successfully with other pets before. We'll work with you to find a good match for your existing pet family.</p>
                        <p className="faqs__answer">We recommend a slow introduction process between new and existing pets, which we'll guide you through. For dogs, we suggest they be cat-friendly and have a history of positive interactions with cats. For other cats, we consider personalities to ensure a harmonious household.</p>
                    </Accordion>
                    <Accordion title="What if the adoption doesn't work out?">
                        <p className="faqs__answer">While we do everything possible to ensure successful adoptions, we understand that sometimes unforeseen circumstances arise. If the adoption isn't working out, we require that you return the cat to our shelter rather than rehoming them yourself.</p>
                        <p className="faqs__answer">Our return policy allows returns within 14 days for a full refund of the adoption fee. After that period, we still accept returns but may not refund the fee. We never want a cat to be in an unsuitable home, so we're committed to taking back any cat we've adopted out, regardless of time passed.</p>
                    </Accordion>
                </div>
            </div>
        </main>
    );
}

export default AdoptionInfo;

