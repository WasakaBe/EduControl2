// SchoolActivities.js
import React from 'react';
import './School.css';
const images = [
  {
    src:'https://i.pinimg.com/564x/53/04/8c/53048c974901278493ded6fbd23f7217.jpg',
    title: 'Ajedrez',
  },
  {
    src:'https://i.pinimg.com/564x/57/a3/9c/57a39c39d3f0542bd1e60cdcd9748fde.jpg',
    title: 'Basquetboll',
  },
  {
    src:'https://i.pinimg.com/564x/53/04/8c/53048c974901278493ded6fbd23f7217.jpg',
    title: 'Atletismo',
  },
  {
    src:'https://i.pinimg.com/564x/57/a3/9c/57a39c39d3f0542bd1e60cdcd9748fde.jpg',
    title: 'Futbol',
  },
  {
    src:'https://i.pinimg.com/564x/53/04/8c/53048c974901278493ded6fbd23f7217.jpg',
    title: 'Voleibol',
  },
  {
    src: 'https://i.pinimg.com/564x/53/04/8c/53048c974901278493ded6fbd23f7217.jpg',
    title: 'Image 6',
  },
  {
    src: 'https://i.pinimg.com/564x/57/a3/9c/57a39c39d3f0542bd1e60cdcd9748fde.jpg',
    title: 'Image 7',
  },
  {
    src: 'https://i.pinimg.com/564x/53/04/8c/53048c974901278493ded6fbd23f7217.jpg',
    title: 'Image 8',
  },
  {
    src: 'https://i.pinimg.com/564x/53/04/8c/53048c974901278493ded6fbd23f7217.jpg',
    title: 'Image 8',
  },
];

const SchoolActivities = () => {
  return (
    <div className='actv'>
    <div className='school-activities'>
      <h2>Actividades Escolares</h2>
      <div className='logos-container'>
        {images.map((image, index) => (
          <img
            key={index}
            className={`circle-image image-${index + 1}`}
            src={image.src}
            alt={image.title}
            title={image.title}
          />
        ))}
      </div>
    </div>

    </div>

  );
};

export default SchoolActivities;
