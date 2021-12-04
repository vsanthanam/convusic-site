import React from 'react';
import './Footer.scss';
import { Link } from "react-router-dom";

enum FooterItemType {
    Route,
    URL
}

class Footer extends React.Component {

    render(): JSX.Element {
        return(
            <div className="footer-container">
                <FooterItem title="Home" type={FooterItemType.Route} destination="/" />
                <FooterItem title="PressKit" type={FooterItemType.URL} destination="/downloads/presskit.zip" />
                <FooterItem title="Twitter" type={FooterItemType.URL} destination="https://twitter.vsanthanam.com" />
                <FooterItem title="Privacy" type={FooterItemType.Route} destination="privacy" />
                <FooterItem title="Contact" type={FooterItemType.URL} destination="mailto:talkto@vsanthanam.com" />
            </div>
        )
    }

}

type FooterItemProps = {
    title: string
    type: FooterItemType,
    destination: string,
};

class FooterItem extends React.Component<FooterItemProps> {

    render(): JSX.Element {
        switch (this.props.type) {
            case FooterItemType.URL:
                return(
                    <div className="footer-item">
                        <p><strong><a href={this.props.destination}>{this.props.title}</a></strong></p>
                    </div>
                )
            case FooterItemType.Route:
                return(
                    <div className="footer-item">
                        <p><Link to={this.props.destination}><strong>{this.props.title}</strong></Link></p>
                    </div>
                )
        }
    }

}

export default Footer;