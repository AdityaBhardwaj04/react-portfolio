// Timeline.js
import React, { useState, useEffect } from 'react'; // Don't forget to import useState and useEffect
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const TimelineData = [
  {
    date: '2021-2025',
    title: 'Kalinga Institute of Industrial Technology',
    text: 'CGPA 8.37 till 2nd Year (2022)',
  },
  {
    date: '2018-2020',
    title: 'Delhi Public School, Patna',
    text: '95% in class 12 boards(2020)',
  },
  {
    date: '2016-2018',
    title: 'Delhi Public School, Patna',
    text: '92% in class 10 boards(2018)',
  },
];

const Timeline = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      
        return () => clearTimeout(timeoutId)
      }, [])

      return ( // Use parentheses here
        <div className="timeline">
            <div className='education-heading'>
                <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['Education', ' ','Timeline']}
                      idx={15}
                    />
            </div>
            {TimelineData.map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="circle-dot"></div>
                <h3 className="timeline-date">{item.date}</h3>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-text">{item.text}</p>
              </div>
            ))}
        </div>
      ) // Close parentheses here
}

export default Timeline;
