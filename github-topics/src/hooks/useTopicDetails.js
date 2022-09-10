import { gql, useQuery } from "@apollo/client";

export const getTopic = gql`
  query GetTopic($topic: String!) {
    topic(name: $topic) {
      id
      name
      stargazerCount
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;
const useTopicDetails = (topic) => {

    const { data, loading, error, refetch } = useQuery(getTopic, {
        variables: { topic: topic },
    });
    return { data, loading, error, refetch }
}

export default useTopicDetails