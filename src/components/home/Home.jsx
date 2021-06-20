import { useEffect, useState } from "react";
import Button from "../elements/butoon/Butoon";
import { v4 as uuidv4 } from "uuid";
import ItemList from "../elements/itemList/ItemList";

import "./style.css";
import axios from "axios";

function Home() {
  // old way to use stat :
  // const [state, setState] = useState({
  //   value: "",
  //   list: [],
  //   error: "",
  // });
  // new way to use stat :
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

      setList(res.data.splice(0, 5));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="ineer-container">
      <h1>To Do List</h1>
      <section className="input-section">
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter a new task"
            className="task-input"
            onChange={(event) => {
              setValue(event.target.value);
            }}
            value={value}
          ></input>
          {error ? <span>{error}</span> : null}
        </div>
        <Button
          className="btn"
          title="Add"
          handleClick={() => {
            if (value) {
              const updatedArr = [{ id: uuidv4(), title: value }, ...list];
              // setState({ ...state, list: updatedArr, value: "", error: "" });
              setList(updatedArr);
              setError("");
              setValue("");
            } else {
              setError("Plase enter task name ");
            }
          }}
        ></Button>
      </section>
      <section className="item-list">
        
        {list?.length ? (
          list.map((item) => (
            <ItemList
              name={item.title}
              key={item.id}
              handleDelete={() => {
                const filteredItems = list.filter(
                  // eslint-disable-next-line eqeqeq
                  (items) => items.id != item.id
                );
                setList(filteredItems);
              }}
            />
          ))
        ) : (
          <span>Loading .... </span>
        )}
      </section>
    </div>
  );

  // state = {
  //   value: "",
  //   list: [],
  //   error: "",
  // };

  // async = promis
  // by async

  //by promis

  // axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
  //   console.log(res);
  //   this.setState({
  //     list: res.data.splice(0,5)
  //   })
  // }).catch((e)=>{
  //   console.log(e);
  // })
}

export default Home;
