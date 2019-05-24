import React from "react";
import Layout from "./components/Layout";
import "./App.css";

/* Examples */
import ExampleOne from "./components/examples/exampleOne";
/* import ExampleTwo from "./components/examples/exampleTwo"; */

/* Exercises */
/* import ExerciseTwo from "./components/exerciseTwo/_exerciseTwo"; */
/* import ExerciseThree from "./components/exerciseThree/_exerciseThree"; */
/* import ExerciseFour from "./components/exerciseFour/_exerciseFour"; */

/* Solutions */
/* import ExerciseTwo from "./components/exerciseTwo/exerciseTwo"; */
/* import ExerciseThree from "./components/exerciseThree/exerciseThree"; */
/* import ExerciseFour from "./components/exerciseFour/exerciseFour"; */

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
      <ExampleOne />
    </Layout>
  </ApolloProvider>
);

export default App;
