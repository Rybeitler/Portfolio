import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export default async function getProjects() {
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
            }
        }
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`
        {
            user(login: "Rybeitler") {
                id
                pinnedItems(first: 4) {
                edges {
                    node {
                    ... on Repository {
                        id
                        name
                        url
                        openGraphImageUrl
                        description
                        object(expression: "main:README.md") {
                            id
                            ... on Blob {
                                text
                            }
                        }
                    }
                    }
                }
                }
            }
        }
    `
    });
    console.log(`data: ${data}`)

    const { user } = data;
    const pinnedItems = user.pinnedItems.edges.map(edge => edge.node);

    return pinnedItems

}
