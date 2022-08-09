import React from 'react';
import './AboutToolbox.style.css';

export const AboutToolbox = () => {
  return (
    <>
      <h4 className="about-toolbox-small-title">KAOSPILOT toolbox /ABOUT US</h4>
      <h1 className="about-toolbox-main-title">ABOUT KAOSPILOT</h1>
      <hr className="horizontal-solid-line" />
      <div className="container">
        <img
          className="about-toolbox-image"
          src="assets/images/concrete-bw.png"
          alt="About toolbox"
        />
        <p className="about-toolbox-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          imperdiet quam vitae maximus bibendum. Cras at elit non sem facilisis
          scelerisque. In elementum maximus odio. Sed urna urna, posuere a
          tempus et, semper nec erat. Sed semper placerat volutpat. Integer quis
          leo augue. Praesent pellentesque volutpat nulla, nec porta sem pretium
          nec. Nunc luctus varius commodo. Nulla lacus turpis, accumsan et
          auctor eget, imperdiet non erat. Sed vitae mi augue. Donec in mauris
          et lectus pretium tristique nec vel sem. In hendrerit pharetra congue.
          Fusce ultricies neque ante, eu finibus nibh bibendum nec. Nam rutrum
          tempor efficitur. In erat dui, interdum in tellus et, interdum finibus
          turpis. Duis ultrices dui nec finibus pharetra. Proin at viverra
          velit, vel luctus eros.{' '}
        </p>
      </div>
      <img
        className="kaospilot-image"
        src="assets/images/kp.png"
        alt="KAOSPILOT"
      />
    </>
  );
};
