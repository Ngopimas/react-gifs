import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    if (!this.props.id) {
      return null;
    }
    return (
      <img
        src={`https://media2.giphy.com/media/${this.props.id}/200.gif`}
        className="gif"
        alt="gif"
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
