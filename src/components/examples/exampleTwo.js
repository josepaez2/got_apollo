import React from "react";
import { Mutation } from "react-apollo";
import FamiliesForm from "./FamiliesForm";
import { CREATE_FAMILY } from "../../queries";

const ExampleTwo = () => (
  <Mutation mutation={CREATE_FAMILY}>
    {addFamily => (
      <section className="create-character">
        <FamiliesForm addFamily={addFamily} />
      </section>
    )}
  </Mutation>
);

export default ExampleTwo;
