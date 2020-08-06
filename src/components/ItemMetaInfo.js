import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ThemeConsumer } from "../contexts/theme";
import { formatDate } from "../utils/dateFormatting";

export default function ItemMetaInfo({
  by,
  time,
  id,
  descendants,
  displayComments
}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`meta-info-${theme}`}>
          <span>
            by <Link to={`/user?id=${by}`}>{by}</Link>
          </span>
          <span>on {formatDate(time)}</span>
          {displayComments && (
            <span>
              with <Link to={`/post?id=${id}`}>{descendants}</Link> comments
            </span>
          )}
        </div>
      )}
    </ThemeConsumer>
  );
}

ItemMetaInfo.defaultProps = {
  displayComments: true
};

ItemMetaInfo.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  descendants: PropTypes.number,
  displayComments: PropTypes.bool
};
