import React from 'react';
import './Preview.scss';
import LightPhone from './images/LightPhone.png';
import DarkPhone from './images/DarkPhone.png';
import LightPad from './images/LightPad.png';
import DarkPad from './images/DarkPad.png';
import LightDual from './images/LightDual.png';
import DarkDual from './images/DarkDual.png';
import LightLaptop from './images/LaptopLight.png';
import DarkLaptop from './images/LaptopDark.png';
import MobileAppStoreLight from './images/MobileAppStore-Light.svg';
import MobileAppStoreDark from './images/MobileAppStore-Dark.svg';
import MacAppStoreLight from './images/MacAppStore-Light.svg';
import MacAppStoreDark from './images/MacAppStore-Dark.svg';

class Preview extends React.Component {

    render() {

        const appStoreComponent: JSX.Element = (
            <a href="https://apps.apple.com/us/app/convusic/id1591366129">
                <picture>
                    <source srcSet={MobileAppStoreDark} media="(prefers-color-scheme: dark)" />
                    <img className="ios-download" src={MobileAppStoreLight} width="218" height="66" alt="Available on the App Store" />
                </picture>
            </a>
        )

        const macAppStoreComponent: JSX.Element = (
            <a href="https://apps.apple.com/us/app/convusic/id1591366129">
                <picture>
                    <source srcSet={MacAppStoreDark} media="(prefers-color-scheme: dark)" />
                    <img src={MacAppStoreLight} width="258" height="66" alt="Available on the Mac App Store" />
                </picture>
            </a>
        );

        const macComponent: JSX.Element = (
            <picture>
                <source srcSet={DarkLaptop} media="(prefers-color-scheme: dark)" />
                <img className="laptop-bitmap" src={LightLaptop} alt="MacBook Pro running Convusic" />
            </picture>
        );

        const phoneComponent: JSX.Element = (
            <picture>
                <source srcSet={DarkPhone} media="(prefers-color-scheme: dark)" />
                <img className="phone-bitmap" src={LightPhone} alt= "iPhone running Convusic" />
            </picture>
        );

        const padComponent: JSX.Element = (
            <picture>
                <source srcSet={DarkPad} media="(prefers-color-scheme: dark)" />
                <img className="pad-bitmap" src={LightPad} alt="iPad running Convusic" />
            </picture>
        )

        const dualComponent: JSX.Element = (
            <picture>
                <source srcSet={DarkDual} media="(prefers-color-scheme: dark)" />
                <img className="dual-bitmap" src={LightDual} alt="iPhone and iPad running Convusic" />
            </picture>
        )

        let previewComponent: JSX.Element
        let downloadComponent: JSX.Element

        if (navigator.platform.match(/iPad/i) || (navigator.platform.match(/Mac/i) && navigator.maxTouchPoints > 2)) {
            previewComponent = padComponent;
            downloadComponent = appStoreComponent
        } else if (/Mobi/i.test(window.navigator.userAgent)) {
            previewComponent = phoneComponent;
            downloadComponent = appStoreComponent;
        } else if (navigator.platform.match(/Mac/i)) {
            previewComponent = macComponent;
            downloadComponent = macAppStoreComponent;
        } else {
            previewComponent = dualComponent;
            downloadComponent = appStoreComponent;
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