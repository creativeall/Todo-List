
import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import ListCom from "./ListCom";


const TodoList = () => {
    const [item, setItem] = useState()
    const [newitem, setNewItem] = useState([]);
    const itemEvent = (event) => {

        setItem(event.target.value)

    }
    const listOfItems = () => {
        setNewItem((prevValue)=>{
return [...prevValue,item]
        });
        setItem("")
    };
    return <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>Todo List</h1>
                <br />
                <TextField id="standard-basic" 
                value={item}
                label="Standard" variant="standard" onChange={itemEvent} />
                <Button className="newBtn" onClick={listOfItems}>
                    <AddIcon> </AddIcon>
                </Button>
                <br />
                <ol>
                    {
                    newitem.map((val,index) => {
                     return  <ListCom key={index} text={val} />
                    })
                    }
                </ol>
                <br />

            </div>
        </div>
    </>
}
export default TodoList;
