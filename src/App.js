import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Layout from "./components/Layout";
/* import ExampleOne from "./components/examples/exampleOne"; */
import ExampleTwo from "./components/examples/exampleTwo";
/* import ExerciseTwo from "./components/exerciseTwo/exerciseTwo"; */
/* import ExerciseThree from "./components/exerciseThree/exerciseThree"; */
import "./App.css";
import ExerciseTwo from "./components/exerciseTwo/exerciseTwo";

/* Ejercicio 1: Para comenzar tienes que configurar tu cliente de Apollo
  Necesitas:
  - ApolloClient de Apollo-Boost
  - { ApolloProvider } de React-Apollo
  - Create una instancia de ApolloClient y le pasas un parametro uri a la configuración del cliente - URL: http://localhost:4000
  - Envuelve todos tus componentes en ApolloProvider pasandole la instancia de cliente de Apollo
*/

/* Create the Apollo Client */
const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => (
  <ApolloProvider client={client}>
    <Layout>
      <h1 className="main-title">A story of ice and GraphQL</h1>
      <ExampleTwo />
      <ExerciseTwo />
    </Layout>
  </ApolloProvider>
);

export default App;
