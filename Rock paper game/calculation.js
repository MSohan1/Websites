let score = localStorage.getItem('Score');
let data = JSON.parse(score) ||{
  won : 0,
  lose:0,
  tie:0, 
};
data.display= function()
  {
     document.querySelector('#display').textContent = `From the Total Matches User Won: ${this.won},Lose: ${this.lose},Tie: ${this.tie}`
    
     localStorage.setItem('Score',JSON.stringify(data))  
    
  };

function start(data)
{
    const userChoice =data;
    let machineChoice = null;
    let random = Math.random()*3;
    if(random<=1)
    {
        machineChoice = 'rock'
    }
    else if(random<=2)
    {
        machineChoice = 'paper'
    }
    else if(random<=3)
    {
        machineChoice = 'scissors'
    }  
    
    game(userChoice,machineChoice);
}


function game(user,machine)
{
    
    if(user === 'rock' )
    {
      if( machine === 'paper')
      {
        
        data.lose++;
        document.querySelector('#user-choice').textContent=`${user}`;
        document.querySelector('#machine-choice').textContent=`${machine}`;
        document.querySelector('#result').textContent=`Machine Won The Match`;

      }
      else if(machine === 'scissors')
      {
        data.won++;
        document.querySelector('#user-choice').textContent=`${user}`;
        document.querySelector('#machine-choice').textContent=`${machine}`;
        document.querySelector('#result').textContent=`User Won The Match`;
        
      }

      else{
        data.tie++;
        document.querySelector('#user-choice').textContent=`${user}`;
        document.querySelector('#machine-choice').textContent=`${machine}`;
        document.querySelector('#result').textContent=`Tie Match`;
      }
    }


  else if(user ==='paper' )
    {
      if(machine === 'scissors')
      {
        data.lose++;
        document.querySelector('#user-choice').textContent=`${user}`;
        document.querySelector('#machine-choice').textContent=`${machine}`;
        document.querySelector('#result').textContent=`Machine Won The Match`;
      }
      else if(machine === 'rock')
      {
        data.won++;
        document.querySelector('#user-choice').textContent=`${user}`;
        document.querySelector('#machine-choice').textContent=`${machine}`;
        document.querySelector('#result').textContent=`User Won The Match`;
      }
      else
      {
        data.tie++;
        document.querySelector('#user-choice').textContent=`${user} `;
        document.querySelector('#machine-choice').textContent=`${machine}`;
        document.querySelector('#result').textContent=`Tie Match`;
      }
    }

    else if (user === 'scissors')
    {
      if(machine === 'rock')
      {
        data.lose++;
        document.querySelector('#user-choice').textContent=`${user}`;
        document.querySelector('#machine-choice').textContent=`${machine}`;
        document.querySelector('#result').textContent=`Machine Won The Match`;
      }
      else if(machine === 'paper')
      {
        data.won++;
        document.querySelector('#user-choice').textContent=`${user}`;
        document.querySelector('#machine-choice').textContent=`${machine}`;
        document.querySelector('#result').textContent=`User Won The Match`;
      }
      else
      {
        data.tie++;
        document.querySelector('#user-choice').textContent=`${user}`;
        document.querySelector('#machine-choice').textContent=`${machine}`;
        document.querySelector('#result').textContent=`Tie Match`;
      }
    }
    else{
      display.textContent = 'Erri pappa ga button otthu';
    }
    data.display();
        
    
    
}


function reset(){
  localStorage.clear();
  data.won=0;
  data.lose=0;
  data.tie=0;
  data.display();
  score = localStorage.setItem('Score',JSON.stringify(data));

  
  document.querySelector('#user-choice').textContent=``;
  document.querySelector('#machine-choice').textContent=``;
  document.querySelector('#result').textContent=``;

}
