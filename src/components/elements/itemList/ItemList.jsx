import Button from "../butoon/Butoon";

import "./style.css";

// we can use props as :
// function ItemList(props) {
//   return (
//     <div className="item">
//       <span>{props.name}</span>
//       <Button
//         isPurble="blueBtn"
//         title="Delete"
//         handleClick={props.handleDelete}
//       />
//     </div>
//   );
// }

// or like this :
function ItemList({ name, handleDelete }) {
  return (
    <div className="item">
      <span>{name}</span>
      <Button isPurble="blueBtn" title="Delete" handleClick={handleDelete} />
    </div>
  );
}

export default ItemList;
