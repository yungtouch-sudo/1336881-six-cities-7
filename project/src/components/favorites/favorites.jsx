import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardType } from '../../const';
import { fetchFavorites } from '../../store/api-actions';
import { getFavoriteOfferCities } from '../../store/offers/selectors';
import Header from '../header/header';
import CityFavorites from '../city-favorites/city-favorites';

function Favorites() {
  const { favoriteOffers } = useSelector((state) => state.OFFERS);
  const favoriteOffersCities = useSelector(getFavoriteOfferCities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const getFavoriteOffersInCity = (city) => favoriteOffers.filter((offer) => offer.city.name === city);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteOffersCities.map((city) => <CityFavorites key={city} offers={getFavoriteOffersInCity(city)} сardType={CardType.FAVORITE} city={city} />)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
