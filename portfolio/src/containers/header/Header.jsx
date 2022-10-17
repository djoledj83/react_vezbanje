import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import logo_v from '../../assets/milos.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Svet voli originale!!!</h1>
                <p>While i'm enjoying in all aspects of my job, I think my favorite stage of a project is work with the team, so we can do everything for clients or business to understand his or her business objectives and do our best. As we go through that collaborative process, the ideas start to flow and that’s always the fun part.</p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Unesite vasu email adresu' />
                    <button type='button'>Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt='people'/>
                    <p>Postanite deo ekipe koja prati moj rad...</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={logo_v} alt="glavna slika" />
            </div>
            
        </div>
    )
}

export default Header
