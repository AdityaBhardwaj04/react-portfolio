import React from 'react';
import Slider from "react-slick";
import './index.scss'; // Import the SCSS file instead of CSS

function Carousel ({projects}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='app-container'>
      <div className="slider-container">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="card">
            <div className='card-image-container'>
              <img src={d.img} alt="" className="card-image"/>
            </div>

            <div className="card-content">
              <p className="card-title">{d.name}</p>
              <p className="card-description">{d.review}</p>
              <button className='read-more-button'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `Kritarth Website`,
    img: `../../assets/images/KritarthImage.png`,
    review: `Created a website for my university event named Kritarth under tight time constraints.`
  },
  {
    name: `Password Cracking`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Using BlackCat learnt to crack codes and became really efficient with linux.`
  },
  {
    name: `Encryption`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Have been writing C++ codes for several different kinds of encryptions being used in day to day life.`
  },
  
];

export default Carousel;
