import React from "react";
import Layout from "./components/Layout";
import "./App.css";

/* Examples */
import ExampleOne from "./components/examples/exampleOne";
/**
  GraphQL Server: https://yoga-got.herokuapp.com
**/

/*
  DOCS:
    - Create client: https://www.apollographql.com/docs/react/essentials/get-started#creating-client
    - Connect your client: https://www.apollographql.com/docs/react/essentials/get-started#creating-provider
  */

/* Apollo modules import here*/

/* Create here the Apollo Client */


const App = () => (
    <Layout>
      <h1 className="main-title">A story of ice and GraphQL</h1>
      {/* Put your current component here! */}
     {/*  <ExampleOne /> */}
    </Layout>
);

export default App;
