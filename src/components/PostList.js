import React from "react";
import Post from "./Post";
import Loading from "./Loading";
import { fetchTopPosts } from "../api/hackerNews";

export default class PostList extends React.Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    const { posts } = this.state;

    if (!posts.length) {
      fetchTopPosts().then(posts => {
        this.setState({
          posts,
          loading: false
        });
      });
    }
  }

  render() {
    const { posts, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <ul>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}
