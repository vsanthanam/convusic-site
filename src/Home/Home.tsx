import React from 'react';
import Banner from '../components/Banner/Banner';
import FeatureList from '../components/FeatureList/FeatureList'
import Phone from '../components/Phone/Phone';

declare var window: any;

class Home extends React.Component {

    render(): JSX.Element {
        return(
            <div>
                <Banner />
                <FeatureList />
                <Phone />
            </div>
        );
    }
    
    componentDidMount() {
        var shouldRedirect = this.isAppleMobile();
        if (shouldRedirect) {
            window.location = "https://apps.apple.com/us/app/convusic/id1591366129";
        }
    }

    isAppleMobile(): boolean {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
    
}

export default Home;