import React from 'react';
import {Image} from 'react-native';

const Icon = ({name}) => {
  if (name === 'Home') {
    return (
      <Image
        source={'icons/home.png'}
        style={{width: 25, height: 25}}
      />
    );
  } else if (name === 'Api') {
    return (
      <Image
        source={'icons/search.png'}
        style={{width: 25, height: 25}}
      />
    );
  }
};
export default Icon;