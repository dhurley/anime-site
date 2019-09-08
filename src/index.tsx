import React from 'react';
import ReactDOM  from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Header from './components/Header';
import AnimeList from './components/anime-list/AnimeList';
import Footer from './components/Footer';

import 'normalize.css';
import './index.scss';

const client = new ApolloClient({ uri: 'https://graphql.anilist.co' });

export default function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Header />
        <AnimeList />
        <Footer />
      </div>
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
