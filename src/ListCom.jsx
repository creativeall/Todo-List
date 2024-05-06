import React, { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ListCom = (props) =>{
    const [line, setLine] = useState(false);
    const cutIt = () =>{
setLine(true);
    }
return<>
<div className="todo_style"> 
<span onClick={cutIt}><HighlightOffIcon className="deleteIcon"/></span>
     <li style={{textDecoration: line?"line-through":'none'}}>{props.text}</li>
     </div>
</>
}
export default ListCom;
