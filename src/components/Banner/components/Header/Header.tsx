import React from 'react';
import './Header.scss';
import './../../../../normalize.css';

type HeaderProps = {
    appName: String
}

class Header extends React.Component<HeaderProps> {

    render(): JSX.Element {
        return(
            <div className="banner-header-container">
                <div className="banner-header-content">
                    <h1><span className="app-name">{this.props.appName}</span> <em>automatically</em> opens <u>any</u> music streaming link in your app of choice.</h1>
                </div>
            </div>
        )
    }

}

export default Header;