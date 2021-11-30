import React from 'react';
import './Footer.scss';
import '../../normalize.css';

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
                    <p><strong><a href="https://twitter.vsanthanam.com">Twitter</a></strong></p>
                </div>
                <div className="footer-item">
                    <p><strong><a href="https://privacy.convusic.app">Privacy</a></strong></p>
                </div>
                <div className="footer-item">
                    <p><strong><a href="mailto:talkto@vsanthanam.com">Contact</a></strong></p>
                </div>
            </div>
        )
    }

}

export default Footer;