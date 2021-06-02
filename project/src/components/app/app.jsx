import React from 'react';
import PageScreen from '../pagescreen/pagescreen';

const cardsDetail = [
  { 'id': 1, 'title': 'Beautiful &amp; luxurious apartment at great location' },
  { 'id': 2, 'title': 'Wood and stone place' },
  { 'id': 3, 'title': 'Canal View Prinsengracht' },
  { 'id': 4, 'title': 'Nice, cozy, warm big bed apartment' },
  { 'id': 5, 'title': 'Wood and stone place' },
];


function App() {

  return (
    <PageScreen cardsDetail={cardsDetail} />
  );
}

export default App;
