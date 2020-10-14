import React from 'react';

import { ContentContainer } from '../../styled/Containers';

// There is just a part of offers

const offers = [
  {
    id: '1',
    companyName: 'P&G',
    offerLink: 'https://wz.pw.edu.pl/Studia/Praktyki-studenckie/Propozycje-stazy-i-praktyk/P-G-2020',
  },
  {
    id: '2',
    companyName: 'UKE',
    offerLink: 'https://wz.pw.edu.pl/Studia/Praktyki-studenckie/Propozycje-stazy-i-praktyk/Praktyki-studenckie-w-UKE',
  },
  {
    id: '3',
    companyName: 'Agencja Stand-up Comedy',
    offerLink: 'https://wz.pw.edu.pl/Studia/Praktyki-studenckie/Propozycje-stazy-i-praktyk/Agencja-Stand-up-Comedy',
  },
  {
    id: '4',
    companyName: 'Nestlé Business Academy',
    offerLink: 'https://wz.pw.edu.pl/Studia/Praktyki-studenckie/Propozycje-stazy-i-praktyk/Nestle',
  },
  {
    id: '5',
    companyName: 'IBPM S.A.',
    offerLink: 'https://wz.pw.edu.pl/Studia/Praktyki-studenckie/Propozycje-stazy-i-praktyk/IBPM-S.A',
  },
];

const PracticesOffers = () => {
  const showAvailableOffers = offers.map(offer => (
    <a key={offer.id} href={offer.offerLink} className="practices-offer">
      {offer.companyName}
    </a>
  ));

  return (
    <ContentContainer>
      <div className="practices-box">
        <h3 className="practices-box-heading">Aktualne oferty praktyk i staży</h3>
        {showAvailableOffers}
      </div>
    </ContentContainer>
  );
};

export default PracticesOffers;
