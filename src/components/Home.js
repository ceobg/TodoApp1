import React from 'react';
import Fuego from './video/Fuego.mp4';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRainbow } from '@fortawesome/free-solid-svg-icons';

function Home() {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Hey Gorgeous!</Popover.Title>
      <Popover.Content>
        You are <strong><h4>amazing.</h4></strong> I'm really
         glad you stopped by. See you soon!
        </Popover.Content>
    </Popover>
  );

  return (

    <div className="progress-wrapper"> <br />
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="light" style={{ boxShadow: 'none', borderColor: 'black', }}><p>press me.</p></Button>
      </OverlayTrigger>


      <br />

      <header className="viewport-header"> <br />
        <h1>Get To Know Me</h1>


        <p> <FontAwesomeIcon className="faicons" icon={faRainbow} />
    Be you beautifully.
    </p>


        <h2 style={{ fontSize: '62px' }}>Meet Shona.</h2>

        <h4>I am new to Web Development. The only experience
        I have seems to be from high school years. I have always had an interest
        computers. I vividly remember getting my first iphone and buying my very
        first laptop. I am definitely a visual person. Although I never loved
        math, I'm pretty confident my design skills and love for computers
        will serve me very well in this program and beyond!
        <br /> Nice to meet you, stay a little longer wont you?!♥</h4>
      </header>
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
        <source src={Fuego} type="video/mp4" />
      </video>

    </div>
  );
}

export default Home;