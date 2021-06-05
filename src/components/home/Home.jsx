import { Component } from "react";
import Button from "../butoon/Butoon";
import ItemList from "../itemList/ItemList";

import "./style.css"
import {Data} from '../../data/Data'

class Home extends Component{

    render(){
        return (
        <div className="ineer-container">
            <h1>To Do List</h1>
            <section className="input-section">
                <input type="text" placeholder="Enter a new task" className="task-input"></input>
                <Button className="btn" title="Add" handleClick={()=>{}}></Button>
            </section>
            <section className="item-list">
                {Data.map((item)=><ItemList name={item.name} key={item.id}></ItemList>)}
            </section>
            
        </div>)  
    }
}

export default Home