import React from 'react';
// import './App.scss';
import Banner from '../components/Banner/Banner';
import FeatureList from '../components/FeatureList/FeatureList'
import Phone from '../components/Phone/Phone';
// import Footer from './components/Footer/Footer';

function Home(): JSX.Element {
    return(
        <div>
            <Banner />
            <FeatureList />
            <Phone />
        </div>
    );
}

export default Home;