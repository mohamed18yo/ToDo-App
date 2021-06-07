import { Component } from "react";
import Button from "../elements/butoon/Butoon";
import { v4 as uuidv4 } from "uuid";
import ItemList from "../elements/itemList/ItemList";

import "./style.css";
import { Data } from "../../data/Data";
import axios from "axios";

class Home extends Component {
  state = {
    value: "",
    list: [],
    error: "",
  };

  componentDidMount() {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        console.log(res);
        this.setState({
          list: res.data,
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }
  render() {
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
                this.setState({ value: event.target.value });
              }}
              value={this.state.value}
            ></input>
            {this.state.error ? <span>{this.state.error}</span> : null}
          </div>
          <Button
            className="btn"
            title="Add"
            handleClick={() => {
              if (this.state.value) {
                const updatedArr = [
                  { id: uuidv4(), name: this.state.value },
                  ...this.state.list,
                ];
                this.setState({ list: updatedArr, value: "", error: "" });
              } else {
                this.setState({ error: "Plase enter task name " });
              }
            }}
          ></Button>
        </section>
        <section className="item-list">
          {this.state.list.length ? (
            this.state.list.map((item) => (
              <ItemList
                name={item.title}
                key={item.id}
                handleDelete={() => {
                  const filteredItems = this.state.list.filter(
                    (items) => items.id != item.id
                  );
                  this.setState({
                    list: filteredItems,
                  });
                }}
              />
            ))
          ) : (
            <span>Loading .... </span>
          )}
        </section>
      </div>
    );
  }
}

export default Home;
