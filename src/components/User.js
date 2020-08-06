import React from "react";

import ItemList from "./ItemList";
import Loading from "./Loading";

import { fetchUser } from "../api/hackerNews";
import { formatDate } from "../utils/dateFormatting";

export default class User extends React.Component {
  state = {
    user: {},
    loading: true
  };

  componentDidMount() {
    const { user } = this.state;

    if (Object.entries(user).length === 0) {
      fetchUser(this.userName()).then(user =>
        this.setState({ user, loading: false })
      );
    }
  }

  userName = () => {
    const { location } = this.props;
    const query = new URLSearchParams(location.search);

    return query.get("id");
  };

  userAbout = () => {
    const { about } = this.state.user;

    return { __html: about };
  };

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <Loading text="Fetching User" />;
    }

    return (
      <>
        <h1 className="header">{this.userName()}</h1>
        <div className="meta-info-light">
          <span>
            joined <b>{formatDate(user.created)}</b>
          </span>
          <span>
            has <b>{user.karma}</b> karma
          </span>
        </div>
        {user.about && <p dangerouslySetInnerHTML={this.userAbout()} />}
        <h2>Posts</h2>
        <ItemList ids={user.submitted} loadingText="Fetching posts" />
      </>
    );
  }
}
