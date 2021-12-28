import React from "react";

class Review extends React.Component {
  render() {
    let title = this.props.title;
    let desc = this.props.desc;
    return (
      <article>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
    );
  }
}

export default Review;
