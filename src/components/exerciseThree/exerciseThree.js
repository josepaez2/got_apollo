import React from "react";
import { Query, Mutation } from "react-apollo";
import { PLACES, SEND_AT_WAR } from "../../queries";
import KingdomList from "../exerciseTwo/kingdomList";

const ExerciseThree = () => (
  <Query query={PLACES}>
    {({ data, loading, error, refetch }) => {
      if (error) return <div>Error</div>;
      if (loading) return <div>Loading</div>;
      return (
        <Mutation mutation={SEND_AT_WAR}>
          {sendAtWar => (
            <KingdomList
              handleClick={sendAtWar}
              refetch={refetch}
              kingdoms={data.families}
            />
          )}
        </Mutation>
      );
    }}
  </Query>
);

export default ExerciseThree;
