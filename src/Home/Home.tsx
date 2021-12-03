import React from 'react';
import Banner from '../Components/Banner/Banner';
import FeatureList from '../Components/FeatureList/FeatureList'
import Preview from '../Components/Preview/Preview';

declare var window: any;

class Home extends React.Component {

    render(): JSX.Element {
        return(
            <div>
                <Banner />
                <FeatureList />
                <Preview />
            </div>
        );
    }

}

export default Home;