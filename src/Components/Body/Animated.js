import React, {Component} from 'react';
// import '../CSS/animated.css'
import SimpleImageSlider from "react-simple-image-slider";

export default class Animated extends Component {
    render() {
        const images = [
            {url: "https://somme2016.org/wp-content/uploads/2022/04/all-things-you-should-know-about-studying-abroad-1.png" },
            {url: "https://www.iesabroad.org/files/blog/images/nia.hill%40bison.howard.edu/2019-07-03/istock-698900018.jpg"}
        ];
        return (
            <div className="animated">
                <SimpleImageSlider
                    width={1500}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}>
                </SimpleImageSlider>
            </div>
        );
    }
};
