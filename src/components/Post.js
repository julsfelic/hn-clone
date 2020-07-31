import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Post({ post }) {
  const formatDate = time =>
    new Date(time * 1000).toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short"
    });

  const { title, by, time, descendants, url } = post;

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

Post.propTypes = {
  post: PropTypes.object.isRequired
};
