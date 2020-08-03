import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { formatDate } from "../utils/dateFormatting";

export default function ItemMetaInfo({ by, time, id, descendants }) {
  return (
    <div className="meta-info-light">
      <span>
        by <Link to={`/user?id=${by}`}>{by}</Link>
      </span>
      <span>on {formatDate(time)}</span>
      <span>
        with <Link to={`/post?id=${id}`}>{descendants}</Link> comments
      </span>
    </div>
  );
}

ItemMetaInfo.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  descendants: PropTypes.number
};
