import React, { Fragment } from 'react';

import { ContentContainer } from '../components/styled/Containers';
import { DeanerySection } from '../components/styled/Sections';

const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

const deansOffices = [
  {
    id: '1',
    name: 'Dziekanat ds. Studiów',
    phones: ['22 849 94 68', '22 234 84 14'],
    mail: 'dziekanat.wz@pw.edu.pl',
    rooms: ['104', '105'],
    hours: {
      monday: 'nieczynne',
      tuesday: '10:00 - 12:00',
      wednesday: 'nieczynne',
      thursday: 'nieczynne',
      friday: '15:00 - 17:00',
    },
    manager: 'mgr inż. Agata Maciszewska',
    special:
      'Uprzejmie informujemy, że przyjęcia Studentów w Dziekanacie ds. Studiów są możliwe TYLKO po wcześniejszym umówieniu się. Nie ma możliwości wizyty w Dziekanacie bez uprzedniego kontaktu mailowego bądź telefonicznego. \n\n Wszelkie podania prosimy kierować na adres dziekanat.wz@pw.edu.pl (nawet te adresowane do Prodziekana ds. studiów)',
  },
  {
    id: '2',
    name: 'Dziekanat ds. Studenckich',
    phones: ['22 234 86 94'],
    mail: 'student.wz@pw.edu.pl',
    rooms: ['5'],
    hours: {
      monday: '10:30 - 13:30',
      tuesday: '16:00 - 19:000',
      wednesday: 'nieczynne',
      thursday: '16:00 - 19:00',
      friday: '12:00 - 15:00',
    },
    manager: 'mgr Korzeniowska Ewelina',
    special:
      'Wnioski o stypendia można składać w Dziekanacie ds. Studenckich pok. 5 (parter) od 5 do 16 października tylko w godzinach otwarcia (proszę sprawdzać godziny pracy na bieżąco). Wnioski o przyznanie stypendium rektora oraz socjalne należy składać w wersji papierowej (wypełnione na komputerze), a zapomogi i wnioski o przyznanie stypendium dla osób niepełnosprawnych tylko przez system USOSweb. Osoby składające wnioski są proszone o sprawdzenie ich poprawności oraz kompletności przed przyjazdem na wydział. Prosimy o zasłanianie nosa i ust, używanie płynów dezynfekcyjnych oraz o przestrzeganie procedur panujących w budynku. \n\n Podbijanie kart obiegowych w większości przypadków odbywa się w USOSweb.',
  },
];

const Deanery = () => {
  const officesInfo = deansOffices.map(office => {
    const isSecondPhone = office.phones.length > 1 ? `${office.phones[0]}, ${office.phones[1]}` : office.phones[0];
    const isSecondRoom = office.rooms.length > 1 ? `${office.rooms[0]}, ${office.rooms[1]}` : office.rooms[0];
    const canVisit = days.map((day, dayIndex) => (
      <span key={day} className="office-days">{`${day}: ${Object.entries(office.hours)[dayIndex][1]}`}</span>
    ));

    return (
      <ContentContainer key={office.id}>
        <DeanerySection>
          <div className="one-office-info-container">
            <h3 className="office-name">{office.name}</h3>
          </div>
          <div className="one-office-info-container">
            <p className="office-info">
              Telefon:
              <span className="office-info-value">{isSecondPhone}</span>
            </p>
          </div>
          <div className="one-office-info-container">
            <p className="office-info">
              E-mail:
              <span className="office-info-value">{office.mail}</span>
            </p>
          </div>
          <div className="one-office-info-container">
            <p className="office-info">
              Pokój:
              <span className="office-info-value">{isSecondRoom}</span>
            </p>
          </div>
          <div className="one-office-info-container">
            <p className="office-info">
              Godziny przyjmowania:
              <span className="office-info-value">{canVisit}</span>
            </p>
          </div>
          <div className="one-office-info-container">
            <p className="office-info">
              Dodatkowe informacje:
              <span className="office-special-info">{office.special}</span>
            </p>
          </div>
        </DeanerySection>
      </ContentContainer>
    );
  });

  return <Fragment>{officesInfo}</Fragment>;
};

export default Deanery;
