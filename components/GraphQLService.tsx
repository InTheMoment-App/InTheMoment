import { ApolloClient, InMemoryCache } from '@apollo/client';

let ip = process.env["LOCAL_IP"]
let port = process.env["PORT"]
const client = new ApolloClient({
    uri: `http://${ip}:${port}/graphql`,
    cache: new InMemoryCache(),
});

export default client;
