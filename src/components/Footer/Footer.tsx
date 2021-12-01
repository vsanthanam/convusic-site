import React from 'react';
import './Footer.scss';
import { Link } from "react-router-dom";

// type FooterItem = {
//     title: String,
//     link: String
// }

// type FooterProps = {
//     items: [FooterItem]
// }

class Footer extends React.Component {

    render(): JSX.Element {
        return(
            <div className="footer-container">
                <div className="footer-item">
                    <p><Link to="/"><strong>Home</strong></Link></p>
                </div>
                <div className="footer-item">
                    <p><strong><a href="https://twitter.vsanthanam.com">Twitter</a></strong></p>
                </div>
                <div className="footer-item">
                    <p><Link to="privacy"><strong>Privacy</strong></Link></p>
                </div>
                <div className="footer-item">
                    <p><strong><a href="mailto:talkto@vsanthanam.com">Contact</a></strong></p>
                </div>
            </div>
        )
    }

}

export default Footer;