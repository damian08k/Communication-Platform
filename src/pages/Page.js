import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Authorities from './Authorities';
import Courses from './Courses';
import Deanery from './Deanery';
import Faculty from './Faculty';
import FacultyNews from './FacultyNews';
import Help from './Help';
import Login from './Login';
import Main from './Main';
import Messages from './Messages';
import Plans from './Plans';
import Practices from './Practices';
import Register from './Register';
import Settings from './Settings';

const Page = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/zaloguj" component={Login} />
      <Route path="/zarejestruj" component={Register} />
      <Route path="/wiadomosci" component={Messages} />
      <Route path="/ustawienia" component={Settings} />
      <Route path="/wydzial" component={Faculty} />
      <Route path="/aktualnosci" component={FacultyNews} />
      <Route path="/wladze" component={Authorities} />
      <Route path="/dziekanat" component={Deanery} />
      <Route path="/plany-zajec" component={Plans} />
      <Route path="/praktyki-i-staze" component={Practices} />
      <Route path="/kursy" component={Courses} />
      <Route path="/faq" component={Help} />
      <Route path="/pomoc" component={Help} />
    </Switch>
  );
};

export default Page;
