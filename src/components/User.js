import React from "react";

import { fetchUser } from "../api/hackerNews";

export default class User extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    const { user } = this.state;

    if (!user) {
      fetchUser(this.userName()).then(user => this.setState({ user }));
    }
  }

  userName = () => {
    const { location } = this.props;
    const query = new URLSearchParams(location.search);

    return query.get("id");
  };

  render() {
    return <h1 className="header">{this.userName()}</h1>;
  }
}
