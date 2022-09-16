import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import TopicDetails from './TopicDetails';
import { getTopic } from '../hooks/useTopicDetails';

let mockData = {
    "topic": {
        "id": "MDU6VG9waWNyZWFjdA==",
        "name": "react",
        "stargazerCount": 77482,
        "relatedTopics": [
            {
                "id": "MDU6VG9waWNhbmd1bGFy",
                "name": "angular",
                "stargazerCount": 45546,
                "__typename": "Topic"
            },
            {
                "id": "MDU6VG9waWNuZXh0anM=",
                "name": "nextjs",
                "stargazerCount": 736,
                "__typename": "Topic"
            },
            {
                "id": "MDU6VG9waWNyZWFjdC1uYXRpdmU=",
                "name": "react-native",
                "stargazerCount": 26061,
                "__typename": "Topic"
            },
            {
                "id": "MDU6VG9waWN2dWU=",
                "name": "vue",
                "stargazerCount": 50596,
                "__typename": "Topic"
            },
            {
                "id": "MDU6VG9waWNsaW51eA==",
                "name": "linux",
                "stargazerCount": 81322,
                "__typename": "Topic"
            },
            {
                "id": "MDU6VG9waWNub2RlanM=",
                "name": "nodejs",
                "stargazerCount": 59574,
                "__typename": "Topic"
            },
            {
                "id": "MDU6VG9waWN3ZWJzaXRl",
                "name": "website",
                "stargazerCount": 2163,
                "__typename": "Topic"
            },
            {
                "id": "MDU6VG9waWNkb2NrZXItY29tcG9zZQ==",
                "name": "docker-compose",
                "stargazerCount": 80,
                "__typename": "Topic"
            }
        ],
        "__typename": "Topic"
    }
}

const renderWithRouter = async (ui, { route = '/react' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
        ...render(ui, { wrapper: BrowserRouter }),
    }
}

describe('Loader', () => {
    it('renders TopicDetails component loader onmount', () => {
        const mocks = [{
            request: {
                query: getTopic,
                variables: { topic: 'react' }
            },
            result: {
                data: mockData
            }
        }]
        renderWithRouter(<MockedProvider mocks={mocks} addTypename={false}><TopicDetails /></MockedProvider>);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    })

    it('renders TopicDetails component with data', async () => {
        const mocks = [{
            request: {
                query: getTopic,
                variables: { topic: 'error' }
            },
            result: {
                data: mockData
            }
        }]
        renderWithRouter(<MockedProvider mocks={mocks} addTypename={false}><TopicDetails /></MockedProvider>);
        setTimeout(() => {
            const textEle = screen.getByTestId("nodejs")
            expect(textEle).toBeInTheDocument();
        }, 1000);

    })

    it('renders TopicDetails component with error', async () => {
        const mocks = [{
            request: {
                query: getTopic,
                variables: { topic: 'error' }
            },
            result: {
                errors: new Error("An error occurred")
            }
        }]
        renderWithRouter(<MockedProvider mocks={mocks} addTypename={false}><TopicDetails /></MockedProvider>);
        setTimeout(() => {
            const textEle = screen.getByText("An error occurred")
            expect(textEle).toBeInTheDocument();
        }, 1000);

    })
})
