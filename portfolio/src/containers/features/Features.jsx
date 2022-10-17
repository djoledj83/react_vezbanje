import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Brand Identity',
        text: 'Visual systems, Logo Design, Brand Guidelines, Creative Direction and many more business needs you can define with me.'
    },
    {
        title: 'Packaging',
        text: 'Retail, Label design, Direct Mail, Mockup are also some of my skils that you can count on.'
    },
    {
        title: 'Web Design',
        text: 'Website, WebShop, Optimisation are also my cup of tea, we can discuss at any time what expectations do you have of your brand.'
    },
    {
        title: 'Print',
        text: 'Stationery, Posters, Signage, Apparel, many years doing this job have filtered what is good and what to skip when were talking about quality print.'
    }
]

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>Design won't save the world, but it damn sure makes it look good!</h1>
                <p>Make an appointment, let's talk first.</p>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
