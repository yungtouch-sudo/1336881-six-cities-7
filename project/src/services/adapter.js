export const adaptOfferData = (data) => ({
  bedrooms: data.bedrooms,
  city: {
    location: {
      latitude: data.city.location.latitude,
      longitude: data.city.location.longitude,
      zoom: data.city.location.zoom,
    },
    name: data.city.name,
  },
  description: data.description,
  goods: data.goods,
  host: {
    avatarUrl: data.host['avatar_url'],
    id: data.host.id,
    isUserPro: data.host['is_pro'],
    userName: data.host.name,
  },
  hotelId: data.id,
  hotelImages: data.images,
  isFavorite: data['is_favorite'],
  isPremium: data['is_premium'],
  location: {
    latitude: data.location.latitude,
    longitude: data.location.longitude,
    zoom: data.location.zoom,
  },
  maxAdults: data['max_adults'],
  previewSrc: data['preview_image'],
  price: data.price,
  rating: data.rating,
  hotelName: data.title,
  offerType: data.type,
});

export const adaptOffersData = (data) => data.map((offerData) => adaptOfferData(offerData));

export const adaptReviewData = (data) => ({
  comment: data.comment,
  date: data.date,
  id: data.id,
  rating: data.rating,
  user: {
    avatarUrl: data.user['avatar_url'],
    userId: data.user['id'],
    isPro: data.user['is_pro'],
    userName: data.user.name,
  },
});

export const adaptReviewsData = (data) => data.map((reviewData) => adaptReviewData(reviewData));
