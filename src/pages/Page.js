import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddMaterials from './AddMaterials';
import AddPost from './AddPost';
import AddTopic from './AddTopic';
import Authorities from './Authorities';
import UserCalendar from './UserCalendar';
import Courses from './Courses';
import Deanery from './Deanery';
import Faculty from './Faculty';
import FacultyNews from './FacultyNews';
import Forum from './Forum';
import ForumCategoryThreads from './ForumCategoryThreads';
import Help from './Help';
import InsideTopic from './InsideTopic';
import Login from './Login';
import Main from './Main';
import Messages from './Messages';
import MyCourses from './MyCourses';
import MyPosts from './MyPosts';
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
      <Route path="/moje-przedmioty" component={MyCourses} />
      <Route path="/kalendarz" component={UserCalendar} />
      <Route path="/dodaj-materialy" component={AddMaterials} />
      <Route path="/moje-wpisy" component={MyPosts} />
      <Route path="/dodaj-wpis" component={AddPost} />
      <Route path="/forum/:category/dodaj-temat" component={AddTopic} />
      <Route path="/forum/:category/:topic" component={InsideTopic} />
      <Route path="/forum/:category" component={ForumCategoryThreads} />
      <Route path="/forum" component={Forum} />
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
