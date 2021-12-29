import React from "react";

class Review extends React.Component {
  render() {
    let title = this.props.title;
    let desc = this.props.desc;
    let image = this.props.src;
    console.log(image);
    return (
      <article className="wrapper">
        <img className="image" src={image} alt="profile"></img>
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </article>
    );
  }
}

export default Review;
