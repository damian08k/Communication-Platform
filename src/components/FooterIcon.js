import React from 'react';

import { SingleIcon } from './styled/FooterElements';

const FooterIcon = ({ href, name, src }) => {
  return (
    <SingleIcon>
      <a className="icon-button" href={href} rel="noopener noreferrer" target="_blank">
        <img src={src} alt={name} className="icon-img" />{' '}
      </a>
      <p className="icon-name">{name}</p>
    </SingleIcon>
  );
};

export default FooterIcon;
