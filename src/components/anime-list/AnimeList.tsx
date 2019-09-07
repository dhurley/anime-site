import React from 'react';
import './AnimeList.scss';

import AnimeListItem from './anime-list-item/AnimeListItem';

export default function AnimeList(): JSX.Element {
  return (
    <div className="anime-list">
      <AnimeListItem id={1} />
      <AnimeListItem id={2} />
      <AnimeListItem id={3} />
    </div>
  )
}
