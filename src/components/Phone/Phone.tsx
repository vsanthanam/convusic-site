import React from 'react';
import './Phone.scss';
import '../../normalize.css';
import LightPhone from './images/LightPhone.png';
class Phone extends React.Component {

    render() {
        return(
            <div className="phone-container">
                <img className="phone-bitmap" src={LightPhone} />
            </div>
        )
    }

}

export default Phone;