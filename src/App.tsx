import React from 'react';
import './App.scss';
import Home from './Home/Home';
import Privacy from './Privacy/Privacy';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;