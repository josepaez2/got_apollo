import React from "react";
import PropTypes from "prop-types";
import { gotClassNames } from "../../utils";

const Kingdom = ({ id, title, atWar, handleClick, refetch }) => (
  <li
    className={`kingdom-section__item ${gotClassNames(
      title,
      "kingdom-section__item"
    ) || ""} ${atWar && "kingdom-section__item--atWar"}`}
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
