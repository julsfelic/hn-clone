import React from "react";
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
