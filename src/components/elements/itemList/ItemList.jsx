import { Component } from "react";
import Button from "../butoon/Butoon";

import "./style.css";

class ItemList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="item">
        <span>{this.props.name}</span>
        <Button
          isPurble="blueBtn"
          title="Delete"
          handleClick={this.props.handleDelete}
        />
      </div>
    );
  }
}

export default ItemList;
