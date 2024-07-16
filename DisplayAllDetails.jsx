import Display from "./Display";



const DisplayAllDetails = ({data,handleDelete})=>{

  return <>
  {data.map((item) =>   (<Display task={item.task} dueDate={item.dueDate} handleDelete={handleDelete}></Display>))}

  </>;

}

export default DisplayAllDetails;