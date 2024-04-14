todo_list =[
  {
    item:'wake up',
    duedate:'25-9-23',
  },
];
display();
function add(){
  let query =document.querySelector('#input_text');
  let text_data = query.value;
  let date = document.querySelector('#input_date').value;
  todo_list.push({item:text_data,duedate:date});

  document.querySelector('#input_text').value ='';
  document.querySelector('#input_date').value='';
  display();
}

function display()
{
  let content = document.querySelector('.todo-container');
  let HTML_code='';
  for(let i=0;i<todo_list.length;i++)
  {
    let {item,duedate} = todo_list[i];
    
    HTML_code +=`
      <span id='list'>${item}</span>
      <span id='date'>${duedate}</span>
      <button id='btn' onclick="todo_list.splice(${i},1);display();">Delete</button>
    
    `;
   
  
    content.innerHTML=HTML_code;
}
}