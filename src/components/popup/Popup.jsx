import React, { useEffect, useState } from 'react'
import "./popup.css"
import {AiFillEdit,AiFillDelete} from"react-icons/ai"
import PopUPWin from '../PopUPWin/PopUPWin'
const Popup = (props) => {


  const [triger,setTrigger] = useState(true);
  const [valueedit ,setValue] = useState('');

  window.addEventListener('scroll',(e)=>{
    console.log(e);
  })

  const Deleter = (value)=>{

    localStorage.removeItem(`${value}`);
    console.log("[Deleted😶‍🌫️]")
    window.location.reload();
   
    
  }

  const Editer = (value)=>{
    setTrigger(false);
    
  }
  const btn_edit = ()=>{

    console.log("[id]       ",props.id)
    console.log("[value]    ",valueedit)
    const data_obj = {data:String(valueedit),ischecked:false,id:`${props.id}`};
    localStorage.setItem(`${props.id}`,JSON.stringify(data_obj));
    setTrigger(true);
    window.location.reload();
  }
  const changer_edit = (e)=>{
    setValue(e.target.value);
  }

  return (
    <div className='containerPop' id='containerPop'>
      {triger?<p>{props.name}</p>:<div><input className='editer' placeholder={props.name} onChange={changer_edit}></input><button id='btn'  onClick={btn_edit}>Edit</button></div>}
      <div className='icon_con'>
        <a onClick={()=>Editer(props.id)}><AiFillEdit/></a>
        <a onClick={()=>Deleter(props.id)}><AiFillDelete/></a>
      </div>
    </div>
  )
}




export default Popup