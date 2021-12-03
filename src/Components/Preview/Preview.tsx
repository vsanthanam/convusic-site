import React from 'react';
import './Preview.scss';
import LightPhone from './images/LightPhone.png';
import DarkPhone from './images/DarkPhone.png';

class Preview extends React.Component {

    render() {
        return(
            <div className="preview-container">
                <picture>
                    <source srcSet={DarkPhone} media="(prefers-color-scheme: dark)" />
                    <img className="phone-bitmap" src={LightPhone} alt= "iPhone running Convusic" />
                </picture>
            </div>
        )
    }

}

export default Preview;