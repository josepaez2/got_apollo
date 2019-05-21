import React from "react";
import KingdomList from "./kingdomList";
import { Query } from "react-apollo";
import { PLACES } from "../../queries";

const ExerciseTwo = () => (
  <Query query={PLACES}>
    {({ data, loading, error }) => {
      if (loading || data.length < 0) return <p>Loading</p>;
      if (error) return <p>Error</p>;
      return <KingdomList kingdoms={data.families} />;
    }}
  </Query>
);

export default ExerciseTwo;
