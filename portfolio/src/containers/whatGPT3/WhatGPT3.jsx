import React from 'react';
import { Feature } from '../../components';
import './WhatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="Solutions" text="All that we do will have specific flow which wil lead your customers thru your product exactly as they expect. The customers will keep asking is there more because our UI and UX design is adapted to needs of basic user which don't necessary need to know any technology!!!"/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">Let's save the planet, why should we print anything</h1>
                <p>Do not worry too much in life, today will be yesterday tomorrow!!!</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Simple" text="Clear and effective messages use fewer resources, lowering the use of energy."/>
                <Feature title="Fast" text="Lightweight websites naturally load faster meaning they perform and convert better." />
                <Feature title="Green" text="Our digital products are powered by low-carbon energy sources such as wind, solar or hydro."/>
            </div>
        </div>
    )
}

export default WhatGPT3
