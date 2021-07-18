export const ActionType = {
  CHANGE_CITY: 'offers/changeCity',
  CHANGE_SORTING: 'offers/changeSorting',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_OFFER_DATA: 'offers/loadOfferData',
  LOAD_REVIEWS: 'offers/loadReviews',
  LOAD_NEARBY_OFFERS: 'offers/loadNearbyOffers',
  LOAD_FAVORITE_OFFERS: 'offers/loadFavoriteOffers',
  ADD_FAVORITE: 'offers/addFavorite',
  REMOVE_FAVORITE: 'offers/removeFavorite',
  SET_COMMENT: 'offers/setComment',
  LOAD_COMMENT: 'offers/loadComment',
  SET_NOT_FOUND_OFFER: 'offers/setNotFoundOffer',
  SET_OFFERS_LOADING_FAILED: 'offers/setOffersLoadingFailed',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  SET_AUTH_INFO: 'user/login',
  LOAD_AUTH_INFO: 'user/loadAuthInfo',
  REDIRECT_TO_ROUTE: 'app/redirectToRoute',
  SET_ERROR: 'app/setError',
  CHECK_LOGIN: 'user/checkLogin',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sorting) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sorting,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOfferData: (offer) => ({
    type: ActionType.LOAD_OFFER_DATA,
    payload: offer,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadNearbyOffers: (nearby) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearby,
  }),
  loadFavoriteOffers: (favorites) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: favorites,
  }),
  addFavorite: (offer) => ({
    type: ActionType.ADD_FAVORITE,
    payload: offer,
  }),
  removeFavorite: (offer) => ({
    type: ActionType.REMOVE_FAVORITE,
    payload: offer,
  }),
  setComment: (comment) => ({
    type: ActionType.SET_COMMENT,
    payload: comment,
  }),
  loadComment: (info) => ({
    type: ActionType.LOAD_COMMENT,
    payload: info,
  }),
  setNotFoundOffer: () => ({
    type: ActionType.SET_NOT_FOUND_OFFER,
  }),
  setOffersLoadingFailed: () => ({
    type: ActionType.SET_OFFERS_LOADING_FAILED,
  }),
  setAuthInfo: (info) => ({
    type: ActionType.SET_AUTH_INFO,
    payload: info,
  }),
  loadAuthInfo: (info) => ({
    type: ActionType.LOAD_AUTH_INFO,
    payload: info,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error,
  }),
  checkLogin: (value) => ({
    type: ActionType.CHECK_LOGIN,
    payload: value,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
