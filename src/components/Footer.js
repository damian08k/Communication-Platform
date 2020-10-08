import React from 'react';

import FooterIcon from './FooterIcon';

import { Copyright } from './styled/FooterElements';
import { FooterContainer, IconsContainer } from './styled/Containers';

import webIcon from '../assets/images/web-page-ico.svg';
import usosIcon from '../assets/images/usos-ico.svg';
import apdIcon from '../assets/images/apd-ico.svg';
import fbIcon from '../assets/images/facebook-ico.svg';
import chatbotIcon from '../assets/images/chatbot-ico.svg';
import copyIcon from '../assets/images/copyright-ico.svg';

const icons = [
  {
    id: '1',
    href: 'https://wz.pw.edu.pl/',
    name: 'WZ PW',
    src: webIcon,
  },
  {
    id: '2',
    href: 'https://usosweb.usos.pw.edu.pl/',
    name: 'USOS',
    src: usosIcon,
  },
  {
    id: '3',
    href: 'https://apd.usos.pw.edu.pl/',
    name: 'APD',
    src: apdIcon,
  },
  {
    id: '4',
    href: 'https://pl-pl.facebook.com/management.pw',
    name: 'FB',
    src: fbIcon,
  },
  {
    id: '5',
    href: 'https://www.facebook.com/WZ-Chatbot-463051401127801/',
    name: 'Chatbot',
    src: chatbotIcon,
  },
];

const Footer = () => {
  const Icon = icons.map(ico => <FooterIcon key={ico.id} href={ico.href} name={ico.name} src={ico.src} />);
  return (
    <FooterContainer>
      <h2 className="footer-ask">Nie znalazłeś tutaj tego, czego szukałeś? Szkorzystaj z innych aplikacji Wydziału:</h2>
      <IconsContainer>{Icon}</IconsContainer>
      <Copyright>
        <img src={copyIcon} alt="ikona copyright" className="copy-ico" />
        <span className="page-author">Damian Kierzkowski</span>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
