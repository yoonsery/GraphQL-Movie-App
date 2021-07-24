import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://movieql2.vercel.app',
  // uri: 'https://apollo-movie-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default client;
