import React from "react";
import PropTypes from "prop-types";

import ItemMetaInfo from "./ItemMetaInfo";

export default function Comment({ comment }) {
  const markup = { __html: comment.text };

  return (
    <div className="comment">
      <ItemMetaInfo {...comment} displayComments={false} />
      <p dangerouslySetInnerHTML={markup} />
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string
  }).isRequired
};
