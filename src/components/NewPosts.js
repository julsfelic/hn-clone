import React from "react";
import ItemList from "./ItemList";
import Loading from "./Loading";

import { fetchNewPostsIds } from "../api/hackerNews";

export default class NewPosts extends React.Component {
  state = {
    ids: [],
    loading: true
  };

  componentDidMount() {
    const { ids } = this.state;

    if (!ids.length) {
      fetchNewPostsIds().then(ids => {
        this.setState({ ids, loading: false });
      });
    }
  }

  render() {
    const { ids, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return <ItemList ids={ids} />;
  }
}
