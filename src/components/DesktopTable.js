import React from 'react';

const DesktopTable = ({ headings, info }) => {
  const helpTableHeadings = headings.map(heading => (
    <th key={heading} className="help-heading">
      {heading}
    </th>
  ));

  const helpTableInfo = info.map(desktopElement => (
    <tr key={desktopElement.id} className="help-row">
      <td className="help-cell">{desktopElement.question}</td>
      <td className="help-cell">{desktopElement.answer}</td>
    </tr>
  ));

  return (
    <table className="desktop-help-table">
      <thead>
        <tr className="help-row">{helpTableHeadings}</tr>
      </thead>
      <tbody>{helpTableInfo}</tbody>
    </table>
  );
};

export default DesktopTable;
