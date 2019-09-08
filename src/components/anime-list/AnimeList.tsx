import React from 'react';
import { Query } from '@apollo/react-components';
import ReactLoading from "react-loading";
import { Scrollbars } from 'react-custom-scrollbars';

import './AnimeList.scss';

import AnimeListItem from './anime-list-item/AnimeListItem';
import { GET_ANIME } from '../../utils/graphql/queries';
import { GetAnime } from '../../__generated__/types';

export default function AnimeList(): JSX.Element {
  const animeList = [
    {
      id: 16498,
      title: {
        romaji: 'Shingeki no Kyojin',
        english: 'Attack on Titan'
      },
      popularity: 113823,
      averageScore: 81,
      description: 'Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n(Source: MangaHelpers) ',
      startDate: {
        year: 2013,
        month: 4,
        day: 7
      },
      endDate: {
        year: 2013,
        month: 9,
        day: 28
      },
      coverImage: {
        extraLarge: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx16498-4SqgyJC1CK5w.jpg'
      },
      episodes: 25,
      siteUrl: 'https://anilist.co/anime/16498',
      genres: [
        'Action',
        'Drama',
        'Fantasy',
        'Mystery'
      ],
    },
    {
      id: 11757,
      title: {
        romaji: 'Sword Art Online',
        english: 'Sword Art Online'
      },
      popularity: 108280,
      averageScore: 70,
      description: 'In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game\'s tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...<br><br>\n(Source: Crunchyroll)',
      startDate: {
        year: 2012,
        month: 7,
        day: 8
      },
      endDate: {
        year: 2012,
        month: 12,
        day: 23
      },
      coverImage: {
        extraLarge: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx11757-Q9P2zjCPICq5.jpg'
      },
      episodes: 25,
      siteUrl: 'https://anilist.co/anime/11757',
      genres: [
        'Action',
        'Adventure',
        'Fantasy',
        'Romance'
      ],
    },
    {
      id: 1535,
      title: {
        romaji: 'Death Note',
        english: 'Death Note'
      },
      popularity: 103871,
      averageScore: 83,
      description: 'Yagami Light is a 17-year-old genius from Japan who is tired of his life, school, and the state of the world as he knows it. One day, on the way home from class, Light stumbles upon a dark notebook with \"Death Note\" written on the front. Intrigued by its appearance, Light reads the first few sentences, only to find out that it states that anyone whose name is written inside will die. Discarding it as a joke, Light continues his daily activities. Soon after though, his human curiosity takes the better of him and prompts Light to try the notebook, discovering the truth behind first sentence. Now, with power in his hands, Yagami Light is on a quest to change the world and become God of the New World. His path to holy status won\'t be easy however, as another genius, known as L, is working against Light\'s beliefs and Light himself. Who will win this power of Gods between humans? <br><br>\n[Written by MAL Rewrite]',
      startDate: {
        year: 2006,
        month: 10,
        day: 4
      },
      endDate: {
        year: 2007,
        month: 6,
        day: 27
      },
      coverImage: {
        extraLarge: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx1535-0seL81FuzaJL.jpg'
      },
      episodes: 37,
      siteUrl: 'https://anilist.co/anime/1535',
      genres: [
        'Mystery',
        'Psychological',
        'Supernatural',
        'Thriller'
      ],
    },
  ]

  return (
    <Query<GetAnime> query={GET_ANIME}>
      {({ loading, error, data }) => {
        if (loading) return (
          <div className="anime-list">
            <ReactLoading type="bars" color="black" height={'100px'} width={'100px'} />
          </div>
        );
        if (error) return (
          <div className="anime-list">
            <h1>Unable to connect, try again later</h1>
          </div>
        );

        return (
          <Scrollbars>
            <div className="anime-list">
              {data.MediaListCollection.lists[0].entries.map((item, key) =>
                <AnimeListItem anime={item.media} key={item.media.id}/>
              )}
            </div>
          </Scrollbars>
        )
      }}
    </Query>
  )
}
