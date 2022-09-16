import { render, screen } from '@testing-library/react';
import * as rrd from 'react-router-dom';
import { MockedProvider } from "@apollo/client/testing";
import TopicLists from './TopicLists';
import { getTopics } from '../hooks/useTopicLists';

jest.mock('react-router-dom');
describe('Loader', () => {
    it('renders TopicLists component', async () => {
        let mockData = {
            "search": {
                "edges": [
                    {
                        "node": {
                            "id": "MDEwOlJlcG9zaXRvcnkxMzU3ODYwOTM=",
                            "name": "react",
                            "stargazers": {
                                "totalCount": 36357,
                                "__typename": "StargazerConnection"
                            },
                            "stargazerCount": 36357,
                            "homepageUrl": "https://react-typescript-cheatsheet.netlify.app",
                            "description": "Cheatsheets for experienced React developers getting started with TypeScript",
                            "url": "https://github.com/typescript-cheatsheets/react",
                            "updatedAt": "2022-09-10T07:56:53Z",
                            "nameWithOwner": "typescript-cheatsheets/react",
                            "__typename": "Repository"
                        },
                        "__typename": "SearchResultItemEdge"
                    },
                ],
                "__typename": "SearchResultItemConnection"
            }
        }
        rrd.useOutletContext.mockReturnValue({ searchValue: 'react' })
        const mocks = [{
            request: {
                query: getTopics,
                variables: { search: "react" }
            },
            result: mockData
        }]
        const Wrapper = () => <MockedProvider mocks={mocks} addTypename={false}><TopicLists /></MockedProvider>;

        render(<Wrapper />)
        const result = await screen.findByTestId('error')
        expect(result).toBeInTheDocument();
    })
})
