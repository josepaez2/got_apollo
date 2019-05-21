import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Layout from "./components/Layout";
import ExerciseTwo from "./components/exerciseTwo/exerciseTwo";
/* import ExerciseThree from "./components/exerciseThree/exerciseThree"; */
import "./App.css";

/* Ejercicio 1: Para comenzar tienes que configurar tu cliente de Apollo
  Necesitas:
  - Apollo Client de Apollo-Boost
  - { ApolloProvider } de React-Apollo
  - Create una instancia de ApolloClient y le pasas un parametro uri a la configuración del cliente - URL: http://localhost:4000
  - Envuelve todos tus componentes en ApolloProvider pasandole la instancia de cliente de Apollo
*/

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => (
  <ApolloProvider client={client}>
    <Layout>
      <h1 className="main-title">A story of ice and GraphQL</h1>
      <ExerciseTwo />
      {/*      <ExerciseThree /> */}
    </Layout>
  </ApolloProvider>
);

export default App;
