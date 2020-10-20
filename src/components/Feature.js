import React from 'react';
import Fuego from './video/Fuego.mp4';
import Stars from './video/Stars.mov';

const Feature = () => {
    return (
        <div className="App">
            <video
                id="background-video" loop autoPlay
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}
            >
                <source src={Fuego} type="video/mp4" />
            </video>

            <video
                id="background-video" loop autoPlay
                style={{
                    position: "fixed",
                    left: "0%",
                    top: "0%",
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    zIndex: "-9",
                }}
            >
                <source src={Stars} type="video/mov" />
            </video>

        </div>
    )
}

export default Feature;