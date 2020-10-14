import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Authorities from './Authorities';
import Deanery from './Deanery';
import Faculty from './Faculty';
import Help from './Help';
import Main from './Main';
import Plans from './Plans';
import Practices from './Practices';

const Page = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/wydzial" component={Faculty} />
      <Route path="/wladze" component={Authorities} />
      <Route path="/dziekanat" component={Deanery} />
      <Route path="/plany-zajec" component={Plans} />
      <Route path="/praktyki-i-staze" component={Practices} />
      <Route path="/pomoc" component={Help} />
    </Switch>
  );
};

export default Page;
