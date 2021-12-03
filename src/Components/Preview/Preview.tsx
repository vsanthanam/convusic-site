import React from 'react';
import './Preview.scss';
import LightPhone from './images/LightPhone.png';
import DarkPhone from './images/DarkPhone.png';
import Laptop from './images/Laptop.png';
import MobileAppStoreLight from './images/MobileAppStore-Light.svg';
import MobileAppStoreDark from './images/MobileAppStore-Dark.svg';
import MacAppStoreLight from './images/MacAppStore-Light.svg';
import MacAppStoreDark from './images/MacAppStore-Dark.svg';

class Preview extends React.Component {

    render() {

        let previewComponent: JSX.Element
        let downloadComponent: JSX.Element

        if (navigator.platform.match(/iPad/i)) {
            previewComponent = (
                <picture>
                    <source srcSet={DarkPhone} media="(prefers-color-scheme: dark)" />
                    <img className="phone-bitmap" src={LightPhone} alt="iPhone running Convusic" />
                </picture>
            );
            downloadComponent = (
                <a href="https://apps.apple.com/us/app/convusic/id1591366129">
                    <picture>
                        <source srcSet={MobileAppStoreDark} media="(prefers-color-scheme: dark)" />
                        <img src={MobileAppStoreLight} width="218" height="66" alt="Available on the App Store" />
                    </picture>
                </a>
            );
        } else if (navigator.platform.match(/Mac/i)) {
            previewComponent = (
                <img className="laptop-bitmap" src={Laptop} alt="MacBook Pro running Convusic" />
            );
            downloadComponent = (
                <a href="https://apps.apple.com/us/app/convusic/id1591366129">
                    <picture>
                        <source srcSet={MacAppStoreDark} media="(prefers-color-scheme: dark)" />
                        <img src={MacAppStoreLight} width="258" height="66" alt="Available on the Mac App Store" />
                    </picture>
                </a>
            )
        } else {
            previewComponent = (
                <picture>
                    <source srcSet={DarkPhone} media="(prefers-color-scheme: dark)" />
                    <img className="phone-bitmap" src={LightPhone} alt= "iPhone running Convusic" />
                </picture>
            );
            downloadComponent = (
                <a href="https://apps.apple.com/us/app/convusic/id1591366129">
                    <picture>
                        <source srcSet={MobileAppStoreDark} media="(prefers-color-scheme: dark)" />
                        <img src={MobileAppStoreLight} width="218" height="66" alt="Available on the App Store" />
                    </picture>
                </a>
            );
        }

        return(
            <div className="preview-container">
                {previewComponent}
                {downloadComponent}
            </div>
        )
    }

}

export default Preview;