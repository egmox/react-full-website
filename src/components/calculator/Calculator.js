import React, {useState} from 'react';
import './Calculator.css';

function Calculator (){

  const [input, setInput] = useState([""]);
  var buttons0 = [];
  var buttons1 = [];
  var buttons2 = [];
  var buttons3 = [];
  var buttons4 = [];
  var expression = '';
  
  ['.','C','AC','-'].forEach((item)=>buttons0.push(
    <td><button
    name={item}
    onClick={(e)=>onClickHandler(e.target.name)}>{item}</button></td>
      ));
  
  [1,2,3,'+'].forEach((item)=>buttons1.push(
  <td><button
  name={item}
  onClick={(e)=>onClickHandler(e.target.name)}>{item}</button></td>
    ));

  [4,5,6,'/'].forEach((item)=>buttons2.push(
    <td><button
    name={item}
    onClick={(e)=>onClickHandler(e.target.name)}>{item}</button></td>
      ));
      
  [7,8,9,'*'].forEach((item)=>buttons3.push(
    <td><button
    name={item}
    onClick={(e)=>onClickHandler(e.target.name)}>{item}</button></td>
      ));
    
  ['(',0,')','='].forEach((item)=>buttons4.push(
    <td><button
    name={item}
    onClick={(e)=>onClickHandler(e.target.name)}>{item}</button></td>
      ));
    
    function onClickHandler(button){
      console.log(button);
      const operations = ['+','-','/','*'];
      switch(button){
        case '=':
          try{
            setInput(eval(input));
          }
          catch(err){

          }
          
        break;
        case 'C':
          setInput(input.slice(0,-1));
        break;
        case 'AC':
          setInput('');
        break;
        default:
          if(/^([0-9])$/.test(button))
          setInput(input + button);
          if(/^([*|/|+|-])$/.test(button))
          if(operations.includes(input.slice(-1))){
            setInput(input.slice(0,-1)+button);
          }
          else {
            setInput(input+button);
          }
          break;
      }
    }

    function logger(e){
      console.log(e.key);
    }

  return (
    <div>
      <table>
        <tr>
          <td colspan="4">
              <input value = {input} onChange={(e) => onClickHandler(e.target.value)} onKeyDown={(e) => logger(e.key)}/>
          </td>
        </tr>
        <tr>
        {buttons0}
        </tr>
        <tr>
        {buttons1}
        </tr>
        <tr>
        {buttons2}
        </tr>
        <tr>
        {buttons3}
        </tr>
        <tr>
        {buttons4}
        </tr>
      </table>
    </div>
  );
}

export default Calculator;
