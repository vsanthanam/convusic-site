import React from 'react';
import './Banner.scss';
import '../../normalize.css';
import Header from './components/Header/Header';
import Explanation from './components/Explanation/Explanation';

class Banner extends React.Component {

    render(): JSX.Element {
        return(
            <div>
                <Header appName="Convusic" />
                <Explanation />
            </div>
        )
    }

}

export default Banner;