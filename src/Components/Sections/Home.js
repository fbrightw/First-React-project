import React, {Component} from 'react';
import videoBackground from "../../../public/night_sky.mp4"

class Home extends Component {
    render() {
        return (
            <div className="home" id="home">
                <div className="overlay"></div>
                <video className="video" src={videoBackground} autoPlay loop muted/>
                <div className="content">
                    <figure className="quote">
                        <blockquote>
                            Failure is the opportunity to begin again more intelligently.
                        </blockquote>
                        <figcaption>
                            &mdash; Henry Ford
                        </figcaption>
                    </figure>
                </div>
            </div>
        );
    }
}

export default Home;