import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesCard from "./favoritesCard";

function Favorites(props) {
  console.log(props);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {props.offers.map(favorites => (
                    <FavoritesCard key={favorites.id} favorites={favorites}></FavoritesCard>
                  ))}
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places"></div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default Favorites;
