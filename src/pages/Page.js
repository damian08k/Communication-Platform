import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Authorities from './Authorities';
import Faculty from './Faculty';
import Help from './Help';
import Main from './Main';

const Page = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/wydzial" component={Faculty} />
      <Route path="/wladze" component={Authorities} />
      <Route path="/pomoc" component={Help} />
    </Switch>
  );
};

export default Page;
