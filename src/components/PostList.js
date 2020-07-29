import React from "react";
import Post from "./Post";
import { fetchTopPosts } from "../api/hackerNews";

export default class PostList extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const { posts } = this.state;

    if (!posts.length) {
      fetchTopPosts().then(posts => {
        this.setState({
          posts
        });
      });
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <ul>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}
