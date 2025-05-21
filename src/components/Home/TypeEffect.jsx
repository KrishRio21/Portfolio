import React from 'react';
import Typewriter from 'typewriter-effect';

function TypeEffect() {
  return (
    <Typewriter
      options={{
        strings: ['Cybersecurity Analyst', 'Full Stack Developer', 'Ethical Hacker'],
        autoStart: true,
        loop: true,
        delay: 60,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeEffect;