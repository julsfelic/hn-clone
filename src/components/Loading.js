import React from "react";
import PropTypes from "prop-types";

export default class Loading extends React.Component {
  state = {
    text: this.props.text
  };

  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {
    text: "Loading"
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.text === `${this.props.text}...`
        ? this.setState({ text: this.props.text })
        : this.setState(({ text }) => ({ text: (text += ".") }));
    }, 150);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { text } = this.state;

    return <p className="loading">{text}</p>;
  }
}
