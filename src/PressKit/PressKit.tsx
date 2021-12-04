import React from 'react';
import './PressKit.scss';
import MacIcon from './images/mac-icon-shadowless.svg';
import ArrowDown from './images/arrow-down.svg';

type QuestionProps = {
    title: String,
    answer: JSX.Element
}

class Question extends React.Component<QuestionProps> {

    render(): JSX.Element {
        return (
            <div>
                <strong><p>{this.props.title}</p></strong>
                <p>{this.props.answer}</p>
            </div>
        );
    }

}

class PressKit extends React.Component {

    render(): JSX.Element {
        return(
            <div className="press-kit-container">
                <div className="press-kit-content">
                    <picture>
                        <img className="mac-icon" src={MacIcon} alt="Convusic Icon" />
                    </picture>
                    <h1>Convusic Press Kit</h1>
                    <p>Convusic is a Safari Extension that automatically redirect music streaming links from Apple Music, Spotify, Tidal, or YouTube Music to your app of choice. Tell us which app you use in the settings menu, and links from all other services will automatically open in that app instead. Convusic is available on the App Store for $0.99, and works on iOS 15 and macOS Monterey.</p>
                    <span className="download-container">
                        <picture>
                            <a href="/downloads/convusic-presskit.zip">
                                <img className="download-icon" src={ArrowDown} alt="Download Press Kit"/>
                            </a>
                        </picture>
                        <a href="/downloads/convusic-presskit.zip">
                            <h3>Download Press Kit</h3>
                        </a>
                    </span>
                    <h2>FAQ</h2>
                    <Question title="How does it work?" answer={<p>Convusic uses public APIs from <a href="https://developer.apple.com/documentation/applemusicapi/">Apple Music</a>, <a href="https://developer.spotify.com/documentation/web-api/">Spotify</a>, and <a href="https://odesli.co">Odesli</a> to first identify the content, then to perform a fuzzy search for equivelent content in the destination service. Apple Music and Spotify APIs are used for their respective services, while the Odesli/SongLink API is used for Tidal and YouTube Music. These API calls are made directly from your device and do not rely on any intermediaries.</p>} />
                    <Question title="Does it slow down my web browser?" answer={<p>Nope! Convusic doesn't even have the permissions to run on websites that aren't music streaming services. It requires no background processes and consumes no additional battery life, activating only when you visit the website belonging to one of the four supported services.</p>} />
                    <Question title="Can I choose which music app to use manually each time?" answer={<p>Yes! You can choose to open the music link in the Convusic app using a button in the extension menu, and manually select your service of choice each time. This can be useful if you use multiple streaming services or are installing Convusic on a shared family computer.</p>} />
                    <Question title="Do I need to buy Convusic multiple times for all my devices?" answer={<p>Nope! A single purchase on the app store includes both the iOS and the macOS versions, and can be installed on every device you own.</p>} />
                    <Question title="I use a different music streaming service. Can you add support for it?" answer={<p>Maybe! If the service has a public facing catalog search API, I'm happy to investigate adding support. Send me an email with the details.</p>} />
                </div>
            </div>
        )
    }

}

export default PressKit;