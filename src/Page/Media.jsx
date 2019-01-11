import React from 'react';
import YouTube from 'react-youtube';
 
export default class Media extends React.Component {
  render() {
    const opts = {
      height: '650',
      width: '100%' ,
      playerVars: {
        autoplay: 1,
        start: 120,
        end: 300,
        controls: 0,
      }

    };
 
    return (
      <YouTube
        videoId="-Ig8ef7EtYw"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}