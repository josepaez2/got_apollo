import React from "react";
import PropTypes from "prop-types";
import Kingdom from "./Kingdom";

const KingdomList = ({ kingdoms, handleClick, refetch }) => (
  <section className="kingdom-section">
    <ul className="kingdom-section__list">
      {kingdoms.map(kingdom => (
        <Kingdom
          handleClick={handleClick}
          key={kingdom.id}
          refetch={refetch}
          {...kingdom}
        />
      ))}
    </ul>
  </section>
);

KingdomList.propTypes = {
  kingdoms: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default KingdomList;
