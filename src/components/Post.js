import React from "react";
import Loading from "./Loading";

import { fetchItem } from "../api/hackerNews";

export default class Post extends React.Component {
  state = {
    post: null,
    loading: true
  };

  componentDidMount() {
    const { post } = this.state;

    if (!post) {
      fetchItem(this.postId()).then(post =>
        this.setState({ post, loading: false })
      );
    }
  }

  postId = () => {
    const { location } = this.props;
    const query = new URLSearchParams(location.search);

    return query.get("id");
  };

  render() {
    const { post, loading } = this.state;

    if (loading) {
      return <Loading text="Fetching post" />;
    }

    return (
      <h1 className="header">
        <a className="link" href={post.url}>
          {post.title}
        </a>
      </h1>
    );
  }
}
