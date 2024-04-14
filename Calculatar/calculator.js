const display = document.querySelector('#display');

function clearDisplay()
{
    display.value='';
}
function appendCharacter(char)
{
    display.value += char;
}
function calculate(){
    try{
    display.value= eval(display.value);
    }
    catch(error)
    {
        display.value = 'ERROR';
    }
}