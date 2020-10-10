import React from 'react';

const MobileList = ({ info }) => {
  const helpMobileListElement = info.map(mobileElement => (
    <li key={mobileElement.id} className="mobile-help-list-element">
      <h3 className="mobile-help-list-category">{mobileElement.question}</h3>
      <p className="mobile-help-list-answer">{mobileElement.answer}</p>
    </li>
  ));

  return <ul className="mobile-help-list">{helpMobileListElement}</ul>;
};

export default MobileList;
