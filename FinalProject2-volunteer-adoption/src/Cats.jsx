import React, { useState, useEffect, useRef } from 'react';
import './Cats.css';
import AdoptionModal from './components/AdoptionModal';

// Import images properly
import Cat1 from "./assets/images/cat1.jpg";
import Cat2 from "./assets/images/cat2.jpg";
import Cat3 from "./assets/images/cat3.jpg";
import Cat4 from "./assets/images/cat4.jpg";
import Cat5 from "./assets/images/cat5.jpg";
import Cat6 from "./assets/images/cat6.jpg";
import PawPrint from "./assets/images/paw-print.png";

function Cats() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const modalRef = useRef(null);
  
  // Example cat data with imported images
  const cats = [
    {
      id: 1,
      name: "Whiskers",
      age: "2 years",
      gender: "Male",
      category: "Adult",
      tags: ["Playful", "Friendly"],
      description: "Whiskers is a friendly tabby who loves to play with toys and cuddle.",
      image: Cat1,
      lastUpdated: "March 15, 2025"
    },
    {
      id: 2,
      name: "Mittens",
      age: "4 months",
      gender: "Female",
      category: "Kitten",
      tags: ["Shy", "Sweet"],
      description: "Mittens is a shy but sweet kitten who is warming up to people.",
      image: Cat2,
      lastUpdated: "April 1, 2025"
    },
    {
      id: 3,
      name: "Shadow",
      age: "5 years",
      gender: "Male",
      category: "Adult",
      tags: ["Independent", "Calm"],
      description: "Shadow is a calm and independent black cat who enjoys peaceful environments.",
      image: Cat3,
      lastUpdated: "April 10, 2025"
    },
    {
      id: 4,
      name: "Luna",
      age: "3 months",
      gender: "Female",
      category: "Kitten",
      tags: ["Energetic", "Curious"],
      description: "Luna is an energetic and curious kitten who loves to explore.",
      image: Cat4,
      lastUpdated: "April 15, 2025"
    },
    {
      id: 5,
      name: "Oliver",
      age: "7 years",
      gender: "Male",
      category: "Senior",
      tags: ["Affectionate", "Calm"],
      description: "Oliver is an affectionate senior cat who loves attention and quiet time.",
      image: Cat5,
      lastUpdated: "April 5, 2025"
    },
    {
      id: 6,
      name: "Cleo",
      age: "6 years",
      gender: "Female",
      category: "Adult",
      tags: ["Playful", "Independent"],
      description: "Cleo is a playful and independent cat who enjoys interactive toys.",
      image: Cat6,
      lastUpdated: "March 28, 2025"
    }
  ];
  
  const categories = ['All', 'Kitten', 'Adult', 'Senior', 'Special Needs'];
  
  // Initialize filteredCats when component mounts
  useEffect(() => {
    setFilteredCats(cats);
  }, []);
  
  // Update filteredCats when selectedCategory changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredCats(cats);
    } else {
      const filtered = cats.filter(cat => 
        cat.category === selectedCategory || 
        cat.tags.includes(selectedCategory)
      );
      setFilteredCats(filtered);
    }
  }, [selectedCategory]);
  
  const handleAdoptClick = (cat) => {
    setSelectedCat(cat);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleModalClose = () => {
    setSelectedCat(null);
  };

  return (
    <main id="main-content">
      <div className="cats">
        <div className="cats__container">
          <div className="cats__titles">
            <h2 className="cats__title">Cats Available for Adoption</h2>
            <p className="cats__subtitle">Find your perfect furry companion</p>
          </div>
          
          <div className="filters">
            <span className="filters__title">Filter by:</span>
            <ul className="filters__list">
              {categories.map(category => (
                <li 
                  key={category}
                  className={`filters__item ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="cats__content">
            {filteredCats.map(cat => (
              <div 
                className="cat-card"
                key={cat.id}
              >
                <div 
                  className="cat-card__image" 
                  style={{
                    backgroundImage: `url(${cat.image})`,
                  }}
                ></div>
                <div className="cat-card__content">
                  <div className="cat-card__header">
                    <h3 className="cat-card__name">{cat.name}</h3>
                    <div className="cat-card__info">
                      <span className="cat-card__info-item">Age: {cat.age}</span>
                      <span className="cat-card__info-item">Gender: {cat.gender}</span>
                    </div>
                  </div>
                  
                  <p className="cat-card__description">{cat.description}</p>
                  
                  <ul className="cat-card__details">
                    <li className="cat-card__detail-item">
                      <span className="cat-card__label">Category:</span>{cat.category}
                    </li>
                    <li className="cat-card__detail-item">
                      <span className="cat-card__label">Traits:</span>{cat.tags.join(', ')}
                    </li>
                  </ul>
                  
                  <div className="cat-card__footer">
                    <span className="cat-card__update">Last updated: {cat.lastUpdated}</span>
                    <button 
                      className="cat-card__adopt-button"
                      onClick={() => handleAdoptClick(cat)}
                    >
                      <img src={PawPrint} alt="Paw print icon" className="cat-card__adopt-icon" />
                      Adopt Me
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <AdoptionModal 
        ref={modalRef} 
        cat={selectedCat}
        onClose={handleModalClose}
      />
    </main>
  );
}

export default Cats;