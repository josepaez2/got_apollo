import React from "react";
import Layout from "./components/Layout";
import "./App.css";

/* Examples */
/* import ExampleOne from "./components/examples/exampleOne"; */
/* import ExampleTwo from "./components/examples/exampleTwo"; */

/* Exercises */
/* import ExerciseTwo from "./components/exerciseTwo/_exerciseTwo"; */
/* import ExerciseThree from "./components/exerciseThree/_exerciseThree"; */
/* import ExerciseFour from "./components/exerciseFour/_exerciseFour"; */

/* Solutions */
/* import ExerciseTwo from "./components/exerciseTwo/exerciseTwo"; */
/* import ExerciseThree from "./components/exerciseThree/exerciseThree"; */
import ExerciseFour from "./components/exerciseFour/exerciseFour";

/*
  Apollo Boost Config

  Para configurar React Apollo necesitaras de:
  - Un provider que envuelva toda tu aplicacion en un contexto {  ApolloProvider }
  - Un cliente que permite instanciar la configuracion de ApolloClient
  - Instancia un nuevo cliente pasandole al constructor un objeto con las configuraciones que requieras
  - En este caso solo necesitaremos pasarle un uri que corresponde a la dirección de nuestro servidor GraphQL
*/

/**
  GraphQL Server: https://yoga-got.herokuapp.com
**/

/* Apollo Boost Config */
import {} from "react-apollo";
import ApolloClient from "apollo-boost";

/* Create the Apollo Client replace null with your ApollOClient instance */
const client = null;

const App = () => (
  /* Wrap all in a ApolloProvider context*/
  <Layout>
    <h1 className="main-title">A story of ice and GraphQL</h1>
    {/* Put your current component here! */}
    <ExerciseFour />
  </Layout>
);

export default App;
