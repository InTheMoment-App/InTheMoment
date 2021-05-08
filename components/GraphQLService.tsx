import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Endpoints } from 'config/endpoints';

const client = new ApolloClient({
    uri: `http://${Endpoints.GraphQLEndpoint}/graphql`,
    cache: new InMemoryCache(),
});

export default client;
