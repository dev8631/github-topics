import { gql, useQuery } from "@apollo/client";

export const getTopics = gql`
  query SearchTopics($search: String!,$qty: Int!) {
    search(query: $search, type: REPOSITORY, first: $qty) {
      edges {
        node {
          ... on Repository {
            id
            name
            stargazers {
              totalCount
            }
            stargazerCount
            homepageUrl
            description
            url
            updatedAt
            nameWithOwner
          }
        }
      }
    }
  }
`;
const useTopicLists = (search, qty = 20) => {

    const { data, loading, error, refetch } = useQuery(getTopics, {
        variables: { search: search, qty: qty },
    });
    return { data, loading, error, refetch }
}

export default useTopicLists