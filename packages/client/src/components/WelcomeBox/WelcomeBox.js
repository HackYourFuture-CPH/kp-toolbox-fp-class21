import React from 'react';
import './WelcomeBox.css';
import { Heading } from './Heading/Heading.component';
import { ImagePlaceHolder } from './ImagePlaceHolder/ImagePlaceHolder.component';
import { Paragraph } from './Paragraph/Paragraph.component';

export const WelcomeBox = () => {
  return (
    <div className="imitation">
      <div className="welcome-box-wrapper">
        <div className="welcome-box-content">
          <Heading />
          <ImagePlaceHolder />
          <Paragraph />
        </div>
      </div>
    </div>
  );
};
