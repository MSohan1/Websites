function Display({task,dueDate,handleDelete})
{
    return (
      <div className="container text-center">
      <div className="row align-items-end displayArea ">
         <div className="col">
          {task}
         </div>
         <div className="col">
           {dueDate}
         </div>
         <div className="col">
         <button type="button" className="btn btn-danger" onClick={()=>handleDelete(task)}>DELETE</button>
         </div>
       </div>
       </div>
    )
}

export default Display;