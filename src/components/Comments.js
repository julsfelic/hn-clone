import React from "react";
import PropTypes from "prop-types";

import Loading from "./Loading";
import Comment from "./Comment";

import { fetchItems } from "../api/hackerNews";

export default class Comments extends React.Component {
  state = {
    comments: [],
    loading: true
  };

  static propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number).isRequired
  };

  componentDidMount() {
    const { comments } = this.state;
    const { ids } = this.props;

    if (!comments.length) {
      fetchItems(ids)
        .then(comments => comments.filter(comment => !!comment.text))
        .then(comments => this.setState({ comments, loading: false }));
    }
  }

  render() {
    const { comments, loading } = this.state;

    if (loading) {
      return <Loading text="Fetching comments" />;
    }

    return (
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    );
  }
}
