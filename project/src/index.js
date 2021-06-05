import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

export const RoutePath = {
  MAIN: '/',
  SIGNIN: '/login',
  MYLIST: '/mylist',
  FILM: '/films/:id',
  ADDREVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};
export const FILMS = [
  {
    movieTitle: 'Fantastic Beasts: The Crimes of Grindelwald',
    src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    movieTitle: 'Bohemian Rhapsody',
    src: 'img/bohemian-rhapsody.jpg',
  },
  {
    movieTitle: 'Macbeth',
    src: 'img/macbeth.jpg',
  },
  {
    movieTitle: 'Aviator',
    src: 'img/aviator.jpg',
  },
  {
    movieTitle: 'We need to talk about Kevin',
    src: 'img/we-need-to-talk-about-kevin.jpg',
  },
  {
    movieTitle: 'What We Do in the Shadows',
    src: 'img/what-we-do-in-the-shadows.jpg',
  },
  {
    movieTitle: 'Revenant',
    src: 'img/revenant.jpg',
  },
  {
    movieTitle: 'Johnny English',
    src: 'img/johnny-english.jpg',
  },
  {
    movieTitle: 'Shutter Island',
    src: 'img/shutter-island.jpg',
  },
  {
    movieTitle: 'Pulp Fiction',
    src: 'img/pulp-fiction.jpg',
  },
  {
    movieTitle: 'No Country for Old Men',
    src: 'img/no-country-for-old-men.jpg',
  },
  {
    movieTitle: 'Snatch',
    src: 'img/snatch.jpg',
  },
  {
    movieTitle: 'Moonrise Kingdom',
    src: 'img/moonrise-kingdom.jpg',
  },
  {
    movieTitle: 'Seven Years in Tibet',
    src: 'img/seven-years-in-tibet.jpg',
  },
  {
    movieTitle: 'Midnight Special',
    src: 'img/midnight-special.jpg',
  },
  {
    movieTitle: 'War of the Worlds',
    src: 'img/war-of-the-worlds.jpg',
  },
  {
    movieTitle: 'Dardjeeling Limited',
    src: 'img/dardjeeling-limited.jpg',
  },
  {
    movieTitle: 'Orlando',
    src: 'img/orlando.jpg',
  },
  {
    movieTitle: 'Mindhunter',
    src: 'img/mindhunter.jpg',
  },
  {
    movieTitle: 'Midnight Special 2',
    src: 'img/midnight-special.jpg',
  },
];
export const Header = {
  FILMTITLE: 'The Grand Budapest Hotel',
  STYLE: 'Drama',
  DATE: '2014',
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
