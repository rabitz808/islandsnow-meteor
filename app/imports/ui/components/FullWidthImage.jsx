import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
      <Image src='http://courses.ics.hawaii.edu/ics314s21/morea/ui-frameworks/experience-islandsnow-video-snapshot.png' fluid alt='FullWidthImage'/>
    );
  }
}
