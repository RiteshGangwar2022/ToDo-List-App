import React from "react";
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add'; //note will have different link from material ui,but we need to change it to this inorder to get work it
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip'; //used to show task which are doing on hover to button

const Midlist=()=>{

    const[count,setcount]=useState(0);
     
    const inc=()=>{
        setcount(count+1);
    }
    const dec=()=>{
        if(count>0){
            setcount(count-1);
        }
        else{
            alert("count reach to 0,so 0 limit reach");
             setcount(0);
        }
    }
     return(
        <>
        
          <div className="main">
             
             <div className="innerdiv">
                  <h1>{count}</h1>
        <Tooltip title="Add">
              <Button  className="btn" onClick={inc}><AddIcon/></Button>
        </Tooltip>
              <Tooltip title="Delete">
              <Button className="btn" onClick={dec}><DeleteIcon/></Button>
              </Tooltip>
             </div>
             
          </div>
        </>
     )
}

export default Midlist;