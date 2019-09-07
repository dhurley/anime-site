import React, { useState } from 'react';
import './AnimeListItem.scss';
import { type } from 'os';

interface IProps {
  id: number
}

export default function AnimeListItem(props: IProps): JSX.Element {
  return (
    <div className="anime-list-item">
      <p>Id: {props.id}</p>
    </div>
  )
}
