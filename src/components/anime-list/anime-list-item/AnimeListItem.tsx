import React, { useState } from 'react';
import './AnimeListItem.scss';

interface ITitle {
  romaji: string
  english: string
}

interface IDate {
  year: number
  month: number
  day: number
}

interface ICoverImage {
  extraLarge: string
}

interface IAnime {
  id: number
  title: ITitle
  popularity: number
  averageScore: number
  description: string
  startDate: IDate
  endDate: IDate
  coverImage: ICoverImage
  episodes: number
  siteUrl: string
  genres: string[]
}

interface IProps {
  anime: IAnime
}

export default function AnimeListItem(props: IProps): JSX.Element {
  return (
    <div className="anime-list-item">
      <h1>{props.anime.title.english ? props.anime.title.english: props.anime.title.romaji}</h1>
      <p>Rating: {props.anime.averageScore}</p>
      <img src={props.anime.coverImage.extraLarge} alt="" height="70%" width="100%"/>
    </div>
  )
}
