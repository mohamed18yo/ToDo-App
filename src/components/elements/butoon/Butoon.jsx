

import "./style.css"

function Button(props){
    return (
      <button
       className={props.isPurble ? "btn blueBtn" : "btn"}
        onClick={props.handleClick}
      >
        {props.title}
      </button>
    );
  }


export default Button
