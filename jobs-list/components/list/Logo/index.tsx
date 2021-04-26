import React from 'react';

export type LogoProps = {
  src: string;
};

export function Logo(props: LogoProps) {
  return <img src={props.src} />;
}

export default Logo;
