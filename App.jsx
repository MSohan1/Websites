import { useState } from 'react';
import './App.css'
import Display from './Display'
import DisplayAllDetails from './DisplayAllDetails';
import UserInput from './userInputArea'
import WelcomeMessage from './WelcomeMessage';





function App() {
  
const inittoDoItems =
[
{
  task:"Get up early morning",
  dueDate:"Every Day"
},{
  task:"Bring Milk",
  dueDate:"Every Day"
},{
  task:"Get Job",
  dueDate:"26-06-2024"
},{
  task:"Play with Kids",
  dueDate:"15-7-2027"
},{
  task:"Play with Code",
  dueDate:"15-7-2027"
}
];
const [todoItems,setTodoItems] = useState(inittoDoItems);

const onAddData=(toDoName,toDoDate) =>
  {
    const newTodoItems = [...todoItems,{task:toDoName,dueDate:toDoDate}];
    setTodoItems(newTodoItems);
  }
  const onDelete= (name)=>{
    const newToDoItems = todoItems.filter((item)=> item.task!=name);
    setTodoItems(newToDoItems);
  }

  return (
    <div>
    <UserInput onChangeData={onAddData}/>
    {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
    <DisplayAllDetails data={todoItems} handleDelete={onDelete}></DisplayAllDetails>
  </div>
  )
}

export default App
