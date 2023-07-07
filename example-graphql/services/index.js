import { request, gql } from "graphql-request";

const graphAPI = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljs6zn1e133h01umhh8fdq2e/master';

export const getBookmarks = async () => {
  const query = gql`
    query Bookmarks {
      bookmarksConnection {
        edges {
          node {
            id
            name
            url
          }
        }
      }
    }
  `;

  const result = await request(graphAPI, query);
  return result.bookmarksConnection.edges;
};
