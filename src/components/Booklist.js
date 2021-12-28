import React from "react";

class Booklist extends React.Component {
  render() {
    let data = this.props.data;
    let lists = [];
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            onClick={function (id, e) {
              e.preventDefault();
              this.props.onClick(id);
            }.bind(this, data[i].id)}
            href={"/" + data[i].title}
          >
            {data[i].title + " - " + data[i].author + " / " + data[i].date}
          </a>
        </li>
      );
      i = i + 1;
    }
    return <ul>{lists}</ul>;
  }
}

export default Booklist;
