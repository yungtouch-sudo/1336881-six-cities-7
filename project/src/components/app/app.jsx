import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PageScreen from '../pagescreen/pagescreen';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import Err404 from '../err404/err404';

import offers from "../../mocks/offers";

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
          <PageScreen offers={offers} />
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
