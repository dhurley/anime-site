/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAnime
// ====================================================

export interface GetAnime_MediaListCollection_lists_entries_media_title {
  __typename: "MediaTitle";
  /**
   * The romanization of the native language title
   */
  romaji: string | null;
  /**
   * The official english title
   */
  english: string | null;
}

export interface GetAnime_MediaListCollection_lists_entries_media_startDate {
  __typename: "FuzzyDate";
  /**
   * Numeric Year (2017)
   */
  year: number | null;
  /**
   * Numeric Month (3)
   */
  month: number | null;
  /**
   * Numeric Day (24)
   */
  day: number | null;
}

export interface GetAnime_MediaListCollection_lists_entries_media_endDate {
  __typename: "FuzzyDate";
  /**
   * Numeric Year (2017)
   */
  year: number | null;
  /**
   * Numeric Month (3)
   */
  month: number | null;
  /**
   * Numeric Day (24)
   */
  day: number | null;
}

export interface GetAnime_MediaListCollection_lists_entries_media_coverImage {
  __typename: "MediaCoverImage";
  /**
   * The cover image url of the media at its largest size. If this size isn't available, large will be provided instead.
   */
  extraLarge: string | null;
}

export interface GetAnime_MediaListCollection_lists_entries_media {
  __typename: "Media";
  /**
   * The id of the media
   */
  id: number;
  /**
   * The official titles of the media in various languages
   */
  title: GetAnime_MediaListCollection_lists_entries_media_title | null;
  /**
   * The number of users with the media on their list
   */
  popularity: number | null;
  /**
   * A weighted average score of all the user's scores of the media
   */
  averageScore: number | null;
  /**
   * Short description of the media's story and characters
   */
  description: string | null;
  /**
   * The first official release date of the media
   */
  startDate: GetAnime_MediaListCollection_lists_entries_media_startDate | null;
  /**
   * The last official release date of the media
   */
  endDate: GetAnime_MediaListCollection_lists_entries_media_endDate | null;
  /**
   * The cover images of the media
   */
  coverImage: GetAnime_MediaListCollection_lists_entries_media_coverImage | null;
  /**
   * The amount of episodes the anime has when complete
   */
  episodes: number | null;
  /**
   * The url for the media page on the AniList website
   */
  siteUrl: string | null;
  /**
   * The genres of the media
   */
  genres: (string | null)[] | null;
}

export interface GetAnime_MediaListCollection_lists_entries {
  __typename: "MediaList";
  media: GetAnime_MediaListCollection_lists_entries_media | null;
}

export interface GetAnime_MediaListCollection_lists {
  __typename: "MediaListGroup";
  /**
   * Media list entries
   */
  entries: (GetAnime_MediaListCollection_lists_entries | null)[] | null;
}

export interface GetAnime_MediaListCollection {
  __typename: "MediaListCollection";
  /**
   * Grouped media list entries
   */
  lists: (GetAnime_MediaListCollection_lists | null)[] | null;
}

export interface GetAnime {
  /**
   * Media list collection query, provides list pre-grouped by status & custom
   * lists. User ID and Media Type arguments required.
   */
  MediaListCollection: GetAnime_MediaListCollection | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
