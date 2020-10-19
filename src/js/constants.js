export const defaultStylesValues = {
  fontSize: 1.8,
  margin: 10,
  padding: 10,

  breakpoints: {
    mobileSmall: '(min-width: 460px)',
    mobileMedium: '(min-width: 640px)',
    mobileXMedium: '(min-width: 800px)',
    mobileLarge: '(min-width: 1024px)',
    desktopSmall: '(min-width: 1280px)',
    desktopMedium: '(min-width: 1360px)',
    desktopLarge: '(min-width: 1600px)',
  },

  colors: {
    black: '#363333',
    white: '#fff',
  },

  headings: {
    h1: 2.5,
    h2: 2.2,
    h3: 2,
  },
};

export const PLATFORM_TITLE = 'Platforma komunikacyjna Wydziału Zarządzania';

export const studentType = 'user';
export const lecturerType = 'lecturer';
export const admWorkerType = 'adm';

export const users = [
  { login: 'student', password: 'student1', type: studentType },
  { login: 'wyklad', password: 'wyklad1', type: lecturerType },
  { login: 'pracadm', password: 'pracadm1', type: admWorkerType },
];
