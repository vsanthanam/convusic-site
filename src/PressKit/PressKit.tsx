import React from 'react';
import './PressKit.scss';
import DesktopAppIcon from './images/AppIcon-Desktop.svg';
import MobileAppIcon from './images/AppIcon-Mobile.svg';
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

class FeatureTable extends React.Component {

    render(): JSX.Element {
        return(
            <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Song</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Playlist</th>
                        <th>Podcast</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="service-name">Amazon Music</th>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <th className="service-name">Apple Music</th>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <th className="service-name">Deezer</th>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <th className="service-name">Pandora</th>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <th className="service-name">Spotify</th>
                        <td>✅</td>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <th className="service-name">Tidal</th>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                    </tr>
                    <tr>
                        <th className="service-name">YouTube Music</th>
                        <td>✅</td>
                        <td>✅</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                    </tr>
                </tbody>
            </table>
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
                        <img className="mac-icon desktop-only" src={DesktopAppIcon} alt="Convusic Icon" />
                        <img className="mac-icon mobile-only" src={MobileAppIcon} alt="Convusic Icon" />
                    </picture>
                    <h1>Convusic Press Kit</h1>
                    <p>Convusic is a Safari Extension that automatically redirects music streaming links from Apple Music, Amazon Music, Deezer, Pandora, Spotify, Tidal, or YouTube Music to your app of choice. Tell us which app you use in the settings menu, and links from all other services will automatically open in that app instead. Convusic is available on the App Store for $0.99, and works on iOS 15 and macOS Monterey.</p>
                    <span className="download-container">
                        <picture>
                            <a href="https://drive.google.com/file/d/1sdiEXKwGRp9H68RDrW-60hqmp2kig7Hw/view?usp=sharing">
                                <img className="download-icon" src={ArrowDown} alt="Download Press Kit"/>
                            </a>
                        </picture>
                        <a href="https://drive.google.com/file/d/1sdiEXKwGRp9H68RDrW-60hqmp2kig7Hw/view?usp=sharing">
                            <h3>Download Press Kit</h3>
                        </a>
                    </span>
                    <h2>FAQ</h2>
                    <Question title="How does it work?" answer={<p>Convusic uses public APIs from <a href="https://developer.apple.com/documentation/applemusicapi/">Apple Music</a>, <a href="https://developer.spotify.com/documentation/web-api/">Spotify</a>, and <a href="https://odesli.co">Odesli</a> to first identify the content, then to perform a fuzzy search for equivelent content in the destination service. Apple Music and Spotify APIs are used for their respective services, while the Odesli/SongLink API is used for Amazon Music, Deezer, Pandora, Tidal, and YouTube Music. These API calls are made directly from your device and do not rely on any intermediaries.</p>} />
                    <Question title="Does it slow down my web browser?" answer={<p>Nope! Convusic doesn't even have the permissions to run on websites that aren't music streaming services. It requires no background processes and consumes no additional battery life, activating only when you visit the website belonging to one of the supported services.</p>} />
                    <Question title="Can I choose which music app to use manually each time?" answer={<p>Yes! You can choose to open the music link in the Convusic app using a button in the extension menu, and manually select your service of choice each time. This can be useful if you use multiple streaming services or are installing Convusic on a shared family computer.</p>} />
                    <Question title="Do I need to buy Convusic multiple times for all my devices?" answer={<p>Nope! A single purchase on the app store includes both the iOS and the macOS versions, and can be installed on every device you own.</p>} />
                    <Question title="What services and media types are supported?" answer={<p>Convusic support most music content from Apple Music, Pandora, Spotify, Tidal, and YouTube Music. New media types and services are added over time. Podcasts and playlists are not currently supported.</p>} />
                    <FeatureTable />
                    <Question title="I use a different music streaming service. Can you add support for it?" answer={<p>Maybe! If the service has a public facing catalog search API, I'm happy to investigate adding support. Send me an email with the details.</p>} />
                    <Question title="I found a supported URL that Convusic either couldn't convert, or converted incorrectly!" answer={<p>I want to hear more! Please fill out <a href="https://forms.gle/m56KTmHdddaY47QY7">this form</a>, and I'll get back to you ASAP.</p>} />
                    <Question title="I'd like a promo code to test Convusic or access to TestFlight. Can you add me?" answer={<p>Maybe! Send me an email with the details and I'll see what I can do.</p>} />
                </div>
            </div>
        )
    }

}

export default PressKit;