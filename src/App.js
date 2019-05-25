import React from "react";
import Layout from "./components/Layout";
import "./App.css";

/* Exercise */
import ExerciseTwo from "./components/exercises/exerciseTwo/_exerciseTwo";
/* Solution */
/* import ExerciseTwo from "./components/exercises/exerciseTwo/exerciseTwo"; */

/**
  GraphQL Server: https://yoga-got.herokuapp.com
**/

/* Apollo Boost Config */
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

/* Create the Apollo Client */
const client = new ApolloClient({
  uri: "https://yoga-got.herokuapp.com/"
});

const App = () => (
  <ApolloProvider client={client}>
    <Layout>
      <h1 className="main-title">A story of ice and GraphQL</h1>
      {/* Put your current component here! */}
      <ExerciseTwo />
    </Layout>
  </ApolloProvider>
);

export default App;

