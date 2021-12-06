import React from 'react';
import './FeatureList.scss';
import { Feature, FeatureIcon } from './Components/Feature/Feature';

class FeatureList extends React.Component {

    render(): JSX.Element {
        return(
            <div className="feature-list-section-container">
                <div className="feature-list-section-content">
                    <div className="feature-grid">
                        <div className="feature-row">
                            <Feature name="Open Any Song, Anywhere" description={<p>Convusic supports many of the most popular services including Apple Music, Spotify, Tidal, and YouTube Music.</p>} icon={FeatureIcon.Artist} />
                            <Feature name="Simple & Instant" description={<p>Enable Convusic and forget about it. Any music streaming link will automatically open in your app of choice. No interaction required. <a href="https://youtu.be/Z0-AWHiuo6s"><strong>See it in action</strong></a>.</p>} icon={FeatureIcon.Puzzle} />
                        </div>
                        <div className="feature-row">
                            <Feature name="Private & Secure" description={<p>Convusic's client apps and browser extensions feature no advertising, use no third-party trackers, and collect no user identifiable data of any kind.</p>} icon={FeatureIcon.Shield} />
                            <Feature name="Cross Platform" description={<p>Convusic works on iPhone, iPad, and Macintosh, and supports iCloud syncing and Handoff for a seamless, integrated experience.</p>} icon={FeatureIcon.ConnectedApps} />
                        </div>
                        <div className="feature-row">
                            <Feature name="Dark Mode" description={<p>Convusic's UI has been carefully designed to support dark mode, in the app and in the Safari extension, on both iOS and macOS</p>} icon={FeatureIcon.Moon} />
                            <Feature name="Regular Updates" description={<p>Convusic has no subscriptions, in-app purchases, or expiring features. Buy the app once, install it on all your devices, and recieve new features & support updates for as long as its supported.</p>} icon={FeatureIcon.Infinity}/>
                        </div>
                    </div>
                    <div className="inspiration">
                        <p className="inspiration">Inspired by <a href="https://itunes.apple.com/app/id1585734696"><strong>Amplosion</strong></a> from <a href="https://www.twitter.com/ChristianSelig"><strong>@ChristianSelig</strong></a></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default FeatureList;