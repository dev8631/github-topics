import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './App.css';
import TopicLists from './components/TopicLists';
import TopicDetails from './components/TopicDetails';
import Layout from './components/reuseable/Layout';


function App() {

  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`
    }
  });
  return (
    <ApolloProvider client={client}>
      <React.StrictMode>
        <div className="App" data-testid='app'>
          <main>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />} >
                  <Route path="/" element={<TopicLists />} />
                  <Route path="/:topic" element={<TopicDetails />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </main>
        </div>
      </React.StrictMode>
    </ApolloProvider>
  );
}

export default App;
