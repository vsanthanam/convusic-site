import React from 'react';
import './App.scss';
import Home from './Home/Home';
import Privacy from './Privacy/Privacy';
import PressKit from './PressKit/PressKit';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Utils/scrolltotop';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
	return (
    	<div>
      		<Router basename="/">
        		<ScrollToTop />
        		<Routes>
          			<Route path="/" element={<Home />} />
          			<Route path="/privacy" element={<Privacy />} />
					<Route path="/presskit" element={<PressKit />} />
        		</Routes>
        		<Footer />
      		</Router>
    	</div>
	);
}

export default App;