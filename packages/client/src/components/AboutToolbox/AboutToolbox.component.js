import React from 'react';
import './AboutToolbox.style.css';

export const AboutToolbox = () => {
  return (
    <div className="about-toolbox-full-page">
      <h4 className="about-toolbox-small-title">
        KAOSPILOT toolbox /ABOUT TOOLBOX
      </h4>
      <h1 className="about-toolbox-main-title">ABOUT KAOSPILOT toolbox</h1>
      <div className="about-toolbox-main-section">
        <img
          className="about-toolbox-image"
          src="assets/images/image-about-toolbox.png"
          alt="About toolbox"
        />
        <div className="about-toolbox-text">
          {' '}
          This toolbox is for anyone who wants to facilitate, engage and
          collaborate with others in a creative and inclusive way. It is a
          kaleidoscope of tools, methods, frameworks and strategies collected
          and cooked up during 30 years of engaging people in bringing
          innovation to a world in constant change.
          <br />
          <br /> This collection is a reflection of the Kaospilopt methodology
          and it is for anyone who wants to bring it in their own work,
          organization and life. It doesn’t need special skills, you can use it
          today!
          <br />
          <br /> This Toolbox is a living thing and will keep growing over time.
          As we encounter and experience new tools and methods we will keep
          adding them. Do you know of something cool that we should include, or
          have a tool you’d like us to add to the Kaospilot Toolbox? Let us
          know!
          <br />
          <br /> It includes methods collected through years of engaging with
          practitioners and people, as well as ones created by Kaospilot and
          Kaospilot students. Even though we did all we could to give accurate
          credit we might have missed something. If we made a mistake or didn’t
          credit the correct source please write us.
          <br />
          <br /> Kaospilot is a disruptive educational provider and facilitator
          of learning experiences for individuals, communities and organizations
          which also offers consulting services. The Kaospilot methodology
          offers an alternative learning and pedagogical approach that is built
          around a rigorous training platform, which dynamically combines
          theory, action and reflection.{' '}
        </div>
      </div>
      <img
        className="kaospilot-image"
        src="assets/images/welcome-box.png"
        alt="KAOSPILOT"
      />
    </div>
  );
};
