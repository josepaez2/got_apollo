import React from "react";
import PropTypes from "prop-types";

const gotClassNames = title =>
  ({
    Lannister: "kingdom-section__item--lannister",
    Stark: "kingdom-section__item--stark",
    Tyrell: "kingdom-section__item--tyrell",
    Arryn: "kingdom-section__item--arryn",
    Targaryen: "kingdom-section__item--targaryen",
    Baratheon: "kingdom-section__item--baratheon",
    Greyjoy: "kingdom-section__item--greyjoy",
    Martell: "kingdom-section__item--martell"
  }[title]);

const Kingdom = ({ id, title, atWar, handleClick, refetch }) => (
  <li
    className={`kingdom-section__item ${gotClassNames(title) || ""} ${atWar &&
      "kingdom-section__item--atWar"}`}
    onClick={() => {
      handleClick({ variables: { familyId: id } });
      refetch();
    }}
  >
    {title}
  </li>
);

Kingdom.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  atWar: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Kingdom;
