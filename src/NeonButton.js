import React from 'react';
import './theme.css';

const NeonButton = ({ as: Component = 'button', accent, ...props }) => {
  return (
    <Component
      className={`NeonButton__root${accent ? ' NeonButton__accent' : ''}`}
      {...props}
    />
  );
};

export default NeonButton;
