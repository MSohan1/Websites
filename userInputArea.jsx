import { useRef, useState } from "react";

function UserInput({onChangeData})
{

const Name = useRef();
const dateData = useRef();

const handleAddButton = ()=>
  {
    const taskName = Name.current.value; 
    const taskDate = dateData.current.value; 
    Name.current.value="";
    dateData.current.value="";
    onChangeData(taskName,taskDate);
  }


  return (
    <div className="container text-center">
      <h1 className="h1">To Do List</h1>
    <div className="row align-items-end userInputArea">
      <div className="col">
       <input type="text" placeholder="Enter Your Tasks "
       ref={Name}
       />
      </div>
      <div className="col">
        <input type="date" name="" id="" 
        ref={dateData}
        />
        
      </div>
      <div className="col">
      <button type="button" className="btn btn-success"
      onClick={handleAddButton}
      >
        ADD</button>
      </div>
    </div>
  </div>
  )
}
export default UserInput;