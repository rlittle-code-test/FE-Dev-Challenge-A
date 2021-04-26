import React from 'react';
import '../styles/globals.css';

export const decorators = [
  (storyFn) => {
    return (
      <div
        style={{
          height: '95%',
          padding: '50px',
          width: '95%',
          background: '#f0fbfb',
        }}
      >
        {storyFn()}
      </div>
    );
  },
];
