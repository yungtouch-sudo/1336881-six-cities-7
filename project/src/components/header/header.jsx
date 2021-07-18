import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { logout } from '../../store/api-actions';

function Header() {
  const { authStatus, authInfo } = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  const isAuthorized = authStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81} height={41}
                data-testid="header-logo"
              />
            </Link>
          </div>
          <nav className="header__nav" data-testid="header-nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{isAuthorized ? authInfo.email : 'Sign in'}</span>
                </Link>
              </li>
              {
                isAuthorized && (
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href={'/'}
                      onClick={(e) => {
                        dispatch(logout());
                        e.preventDefault();
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}




export default Header;
