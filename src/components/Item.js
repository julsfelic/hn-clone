import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ItemMetaInfo from "./ItemMetaInfo";

export default function Item({ item }) {
  const { title, url } = item;

  return (
    <li className="post">
      <a className="link" href={url}>
        {title}
      </a>
      <ItemMetaInfo {...item} />
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};
