import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// possibly hashRouter
import './index.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import UserLogin from './pages/UserLogin';
import Logout from './pages/UserLogin'
import Dashboard from './pages/Dashboard';
// import Potluck from './pages/Potluck';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// const logout = () => {
//   this.setState({ 
//     sessionToken: '', 
//   });
//   localStorage.clear();
// }
function App() {
  return (
    <ApolloProvider client={client}>
      <div className='page-container'>
        <div className='content-wrap'>

          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<UserLogin></UserLogin>} />
              <Route exact path="/logout" element={<Logout/>} /> 
              <Route exact path="/dashboard" element={<Dashboard></Dashboard>} />
            </Routes>
          </Router>
        </div>
      </div>


    </ApolloProvider>

  );
}

export default App;
