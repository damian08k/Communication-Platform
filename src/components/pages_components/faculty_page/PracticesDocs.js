import React from 'react';

import { ContentContainer } from '../../styled/Containers';

import dok08 from '../../../assets/files/dok08_praktyki.pdf';
import for18 from '../../../assets/files/for18-Cele i program praktyki.docx';

const documents = [
  {
    id: '1',
    documentName: 'Praktyki realizowane przez studentów Wydziału Zarządzania',
    documentFile: dok08,
  },
  {
    id: '2',
    documentName: 'Cele i program praktyk - formularz FOR18',
    documentFile: for18,
  },
];

const PracticesDocs = () => {
  const showNecessaryDocuments = documents.map(doc => (
    <a key={doc.id} href={doc.documentFile} className="document-file">
      {doc.documentName}
    </a>
  ));

  return (
    <ContentContainer>
      <div className="practices-box">
        <h3 className="practices-box-heading">Dokumenty niezbędne do zaliczenia praktyk</h3>
        {showNecessaryDocuments}
      </div>
    </ContentContainer>
  );
};

export default PracticesDocs;
