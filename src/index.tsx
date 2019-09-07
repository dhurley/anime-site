import React from 'react';
import ReactDOM  from 'react-dom';

import Header from './components/Header';
import AnimeList from './components/anime-list/AnimeList';
import Footer from './components/Footer';

import 'normalize.css';
import './index.scss';

export default function App(): JSX.Element {
  return (
    <div className="container">
      <Header />
      <AnimeList />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
