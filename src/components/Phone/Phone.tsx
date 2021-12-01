import React from 'react';
import './Phone.scss';
import LightPhone from './images/LightPhone.png';
import DarkPhone from './images/DarkPhone.png';
class Phone extends React.Component {

    render() {
        return(
            <div className="phone-container">
                <picture>
                    <source srcSet={DarkPhone} media="(prefers-color-scheme: dark)" />
                    <img className="phone-bitmap" src={LightPhone} alt= "moving car" />
                </picture>
            </div>
        )
    }

}

export default Phone;