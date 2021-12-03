import React from 'react';
import './FeatureList.scss';
import Feature from './Components/Feature/Feature';

class FeatureList extends React.Component {

    render(): JSX.Element {
        return(
            <div className="feature-list-section-container">
                <div className="feature-list-section-content">
                    <div className="feature-grid">
                        <div className="feature-row">
                            <Feature name="Open Any Song, Anywhere" description="Convusic supports many of the most popular services including Apple Music, Spotify, Tidal, and YouTube Music" icon="artist"/>
                            <Feature name="Simple & Instant" description="Enable Convusic and forget about it. Any music streaming link will automatically open in your app of choice. No interaction required." icon="puzzle"/>
                        </div>
                        <div className="feature-row">
                            <Feature name="Private & Secure" description="Convusic's client apps and browser extensions feature no advertising, use no third-party trackers, and collect no user identifiable data of any kind." icon="shield"/>
                            <Feature name="Cross Platform" description="Convusic works on iPhone, iPad, and Macintosh, and supports iCloud syncing and Handoff for a seamless, integrated experience." icon="connected-apps"/>
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