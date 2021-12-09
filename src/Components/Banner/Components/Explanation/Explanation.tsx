import React from 'react';
import './Explanation.scss';
import DesktopAppIcon from './images/AppIcon-Desktop.svg';
import MobileAppIcon from './images/AppIcon-Mobile.svg';
import AppStoreLight from './images/AppStore-Light.svg';
import AppStoreDark from './images/AppStore-Dark.svg';
import AppleMusicMobile from './images/AppleMusicMobile.svg';
import LightSpotifyMobile from './images/LightSpotifyMobile.svg';
import DarkSpotifyMobile from './images/DarkSpotifyMobile.svg';

class Explanation extends React.Component {

    render(): JSX.Element {
        return(
            <div className="explanation-container">
                <div className="explanation-content">
                    <div className="artwork-container">
                        <picture>
                            <source srcSet={DarkSpotifyMobile} media="(prefers-color-scheme: dark)" />
                            <img className="mobile-only mobile-icon" src={LightSpotifyMobile} alt="Spotify"/>
                        </picture>
                        <span className="service-container">
                            <div className="service-link spotify">
                                <div className="service-icon">
                                    <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4999313,0 C5.14882946,0 0,5.1488151 0,11.5000687 C0,17.8515969 5.14882946,23 11.4999313,23 C17.8517198,23 23,17.8515969 23,11.5000687 C23,5.14922709 17.8517198,0.000549309482 11.499794,0.000549309482 L11.4999313,0 Z M16.7737257,16.5863998 C16.5677396,16.9242251 16.125556,17.0313405 15.7877387,16.8239762 C13.0876725,15.1746744 9.68862658,14.801144 5.68562933,15.7157443 C5.29988596,15.8036338 4.91537851,15.5619376 4.82749109,15.1760477 C4.7391917,14.7901578 4.97992083,14.4056412 5.36662547,14.3177517 C9.74726397,13.3164978 13.5048631,13.7478431 16.536155,15.6003893 C16.8739723,15.8077536 16.9810851,16.2485745 16.7737257,16.5863998 L16.7737257,16.5863998 Z M18.1812977,13.4546491 C17.9217551,13.8769308 17.3697123,14.0101383 16.9481273,13.7505896 C13.856962,11.8501161 9.1449605,11.2998454 5.48870659,12.4097252 C5.0145265,12.5529576 4.51370554,12.2857186 4.36978989,11.8123511 C4.22697284,11.3381597 4.49434284,10.8382881 4.96769899,10.6940943 C9.14413656,9.42683735 14.3362231,10.0406907 17.8860509,12.222136 C18.3076358,12.4816847 18.4408402,13.0337407 18.1812977,13.4547865 L18.1812977,13.4546491 Z M18.3021429,10.193948 C14.5957656,7.99245297 8.48072388,7.79003242 4.94201938,8.86406979 C4.37377229,9.03641564 3.77284207,8.7156189 3.60063766,8.14735824 C3.42843325,7.57882293 3.74894768,6.97829033 4.31760674,6.8055325 C8.37979067,5.57233271 15.1327028,5.8105957 19.3999116,8.34387371 C19.9121305,8.64722987 20.0796659,9.30736254 19.7761796,9.81780837 C19.4740666,10.3289408 18.8121645,10.4974415 18.3026921,10.193948 L18.3021429,10.193948 Z" id="Shape"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p><strong>Spotify Link</strong><br /><span className="link-text">open.spotify.com</span></p>
                                </div>
                            </div>
                        </span>
                        <span className="arrow">
                            <svg role="presentation" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM1 9H23V7H1V9Z" fill="#000000"/>
                            </svg>
                        </span>
                        <img className="app-icon desktop-only" src={DesktopAppIcon} alt="Convusic icon — a white soundwave"/>
                        <img className="app-icon mobile-only" src={MobileAppIcon} alt="Convusic icon — a white soundwave"/>
                        <span className="arrow">
                            <svg role="presentation" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM1 9H23V7H1V9Z" fill="#000000"/>
                            </svg>
                        </span>
                        <picture>
                            <img className="mobile-only mobile-icon" src={AppleMusicMobile} alt="Apple Music" />
                        </picture>
                        <span className="service-container">
                            <div className="service-link apple-music">
                                <div className="service-icon">
                                    <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.154519,22.0737955 C14.9069697,23.2845167 13.5305224,23.0957731 12.2185242,22.5249388 C10.8236628,21.9425957 9.54849258,21.9057677 8.07537171,22.5249388 C6.24087588,23.3167413 5.26723506,23.0865661 4.1623944,22.0737955 C-2.07535178,15.6519092 -1.15465124,5.86946597 5.93474295,5.50118575 C7.65415122,5.5932558 8.85796718,6.45180906 9.87073777,6.52316335 C11.3760832,6.21703042 12.8169795,5.34006315 14.4282055,5.45515072 C16.3639784,5.61166981 17.81178,6.37585126 18.7785155,7.74999683 C14.7964857,10.1438182 15.7402037,15.3918113 19.3976866,16.8649322 C18.6657297,18.7868946 17.7266152,20.6858395 16.1522172,22.0899078 L16.154519,22.0737955 Z M9.73263269,5.43213321 C9.54619083,2.57796152 11.8594509,0.230175136 14.5202755,0 C14.886254,3.29150444 11.5279988,5.7543784 9.73263269,5.43213321 Z" id="Shape"></path> 
                                    </svg>
                                </div>
                                <div>
                                    <p><strong>Apple Music</strong><br /><span className="link-text">music.apple.com</span></p>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="download-container">
                        <div className="download-content">
                            <a href="https://apps.apple.com/us/app/convusic/id1591366129">
                                <picture>
                                    <source srcSet={AppStoreDark} media="(prefers-color-scheme: dark)" />
                                    <img src={AppStoreLight} width="218" height="66" alt="Available on the Apple App Store"/>
                                </picture>
                            </a>
                            <p>Requires iOS 15 or macOS 12</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Explanation;