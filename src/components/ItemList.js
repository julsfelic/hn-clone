import React from "react";
import PropTypes from "prop-types";

import Item from "./Item";
import Loading from "./Loading";
import { fetchItems } from "../api/hackerNews";

export default class ItemList extends React.Component {
  state = {
    items: [],
    loading: true
  };

  static propTypes = {
    ids: PropTypes.array,
    loadingText: PropTypes.string
  };

  componentDidMount() {
    const { ids } = this.props;
    const { items } = this.state;

    if (!items.length) {
      fetchItems(ids).then(items => {
        const filteredItems = items.filter(({ title }) => !!title);

        this.setState({
          items: filteredItems,
          loading: false
        });
      });
    }
  }

  render() {
    const { items, loading } = this.state;
    const { loadingText } = this.props;

    if (loading) {
      return <Loading text={loadingText} />;
    }

    return (
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}
