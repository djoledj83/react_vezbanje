import React from 'react';
import possibilityImage from '../../assets/work.png';
import './possibility.css';

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="Possibility" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Sometimes some work is irreversible</h4>
                <h1 className='gradient__text'>Some of ideas of creative people are far beyond your imagination</h1>
                <p>Graphic design studio is specializing in branding, branded illustration systems, and packaging. My goal is to create meaningful and timeless design for my clients and their audience.
                I believe that great work comes from building great relationships.

                I work one on one with my clients and collaborate with them every step
                of the way.</p>
                <h4>Do not hesitate to make a contact.</h4>
            </div>
        </div>
    )
}

export default Possibility
