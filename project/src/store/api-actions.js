import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import Swal from 'sweetalert2';

const errorHandler = (err) => Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Please try again',
});

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
    .catch(() => dispatch(ActionCreator.setOffersLoadingFailed()))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOfferData(data)))
    .catch(() => dispatch(ActionCreator.setNotFoundOffer()))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
    .catch((err) => {
      dispatch(ActionCreator.loadReviews([]));
      dispatch(ActionCreator.setError(err.message));
    })
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data)))
    .catch((err) => {
      dispatch(ActionCreator.loadNearbyOffers([]));
      dispatch(ActionCreator.setError(err.message));
    })
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteOffers(data)))
);

export const postComment = ({review: comment, rating}, id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadComment(true));
  return api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.setComment(data)))
    .catch((err) => {
      dispatch(ActionCreator.loadComment(false));
      dispatch(ActionCreator.setError(err.message));
      errorHandler(err);
    });
};

export const postFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => dispatch(ActionCreator[data['is_favorite'] ? 'addFavorite' : 'removeFavorite'](data)))
    .catch(() => {
      dispatch(ActionCreator.redirectToRoute(AppRoute.SIGN_IN));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setAuthInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      return response;
    })
    .then(({data}) => dispatch(ActionCreator.setAuthInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch((err) => {
      errorHandler(err);
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
);
