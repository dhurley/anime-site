import { gql } from 'apollo-boost';

export const GET_ANIME = gql`
  query GetAnime {
    MediaListCollection(userId: 1, type:ANIME, sort:[MEDIA_POPULARITY_DESC]){
      lists{
        entries{
          media{
            id
            title {
              romaji
              english
            }
            popularity
            averageScore
            description
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            coverImage {
              extraLarge
              medium
            }
            episodes
            siteUrl
            genres
          }
        }
      }
    }
  }
`;
