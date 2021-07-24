import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  if (loading) {
    return 'Loading...🛠';
  }
  if (data && data.movies) {
    return data.movies.map((movie) => <h1 key={movie.id}>{movie.title}</h1>);
  }
};
