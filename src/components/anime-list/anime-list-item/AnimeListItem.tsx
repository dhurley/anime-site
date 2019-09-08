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
  medium: string
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
    <div className="anime-list-item" style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)), url(${props.anime.coverImage.medium})` 
      }}>
      <div>{props.anime.title.english ? props.anime.title.english: props.anime.title.romaji}</div>
    </div>
  )
}
