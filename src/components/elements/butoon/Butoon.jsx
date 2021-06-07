import { Component } from "react";


import "./style.css"

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
       className={this.props.isPurble ? "btn blueBtn" : "btn"}
        onClick={this.props.handleClick}
      >
        {this.props.title}
      </button>
    );
  }
}

export default Button
