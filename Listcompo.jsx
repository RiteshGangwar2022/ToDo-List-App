import React, { useState } from "react";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const Listcompo=(props)=>{
    const[line,setline]=useState(false);

    const cut=()=>{
        setline(true);
    }
    return(
 
        <>
        <div className="lcompo">
        <span onClick={cut}><DeleteRoundedIcon className="delete"/></span>
        <li style={{textDecoration:line?"line-through":"none"}}>{props.text}</li>
        </div>
        </>
        
    )
}

export default Listcompo;