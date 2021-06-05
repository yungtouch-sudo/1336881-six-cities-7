import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PageScreen from '../pagescreen/pagescreen';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import Err404 from '../err404/err404';

const cardsDetail = [
  { 'id': 1, 'title': 'Beautiful &amp; luxurious apartment at great location' },
  { 'id': 2, 'title': 'Wood and stone place' },
  { 'id': 3, 'title': 'Canal View Prinsengracht' },
  { 'id': 4, 'title': 'Nice, cozy, warm big bed apartment' },
  { 'id': 5, 'title': 'Wood and stone place' },
];

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <PageScreen cardsDetail={cardsDetail} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Offer />
        </Route>
        <Route path={'/'}>
          <Err404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
