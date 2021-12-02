import React from 'react';
import './Banner.scss';
import Header from './Components/Header/Header';
import Explanation from './Components/Explanation/Explanation';

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