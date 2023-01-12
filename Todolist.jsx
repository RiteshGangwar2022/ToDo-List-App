import react, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Listcompo from "./Listcompo";

const Todolist=()=>{
      
    //to add new item in list ,we need to use hooks
    const[item,setitem]=useState("");
    const inputchange=(event)=>{ //to show it in the li on writing the input tag
        setitem(event.target.value);
    }

    //but we want to show it when it write completely in the input tag and add on clikcing plus button
    const[newitem,setnewitem]=useState([]);
     const Btnclick=()=>{
          setnewitem((prevalue)=>{
            return [...prevalue,item];
          })
          setitem(""); //setting placeholder again but we should use value in input field to use this
     }
        return(
            <>
             
             <div className="main">
                <br />
                <div className="innermain">
                    <h1>ToDo List</h1>
                     <br />
                     <input type="text"  value={item} placeholder="add an item"  onChange={inputchange}/>
                     <Button className="newbtn" onClick={Btnclick}><AddIcon/></Button>
                     <br />
                     <ul>
                          {/*<li>{item}</li>*/}
                          {/*using mapping method to fetch multiple element*/}
                         
                          {newitem.map((value)=>{
                              return  <Listcompo text={value}/>
                          })}
                     </ul>
                     <br />
                </div>
             </div>
             
            </>
        )
} 

export default Todolist;