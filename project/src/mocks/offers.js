import { nanoid } from 'nanoid';

const AVATAR_URL = 'https://i.pravatar.cc/128';
const IMAGE_URL = 'https://picsum.photos/260/200';

const offers = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    "host": {
      "avatarUrl": `${AVATAR_URL}?random=${Math.random()}`,
      "id": nanoid(),
      "is_pro": true,
      "name": "Angelina"
    },
    "id": nanoid(),
    "images": [`${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "previewImage": `${IMAGE_URL}?random=${Math.random()}`,
    "price": 1,
    "rating": 4.8,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment"
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
    "host": {
      "avatarUrl": `${AVATAR_URL}?random=${Math.random()}`,
      "id": nanoid(),
      "is_pro": true,
      "name": "Angelina"
    },
    "id": nanoid(),
    "images": [`${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "previewImage": `${IMAGE_URL}?random=${Math.random()}`,
    "price": 1,
    "rating": 4.8,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment"
  },
]

export default offers;
