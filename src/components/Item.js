import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { formatDate } from "../utils/dateFormatting";

export default function Item({ item }) {
  const { title, by, time, descendants, url } = item;

  return (
    <li className="post">
      <a className="link" href={url}>
        {title}
      </a>
      <div className="meta-info-light">
        <span>
          by <Link to={`/user?id=${by}`}>{by}</Link>
        </span>
        <span>on {formatDate(time)}</span>
        <span>
          with <a href="/">{descendants}</a> comments
        </span>
      </div>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};
