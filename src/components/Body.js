import React,{Component} from 'react';
import Calculator from './calculator/Calculator.js';
import '.././css/Header.css';

class Body extends Component{
    render(){
        return(
            <div>
                <center>
                    <Calculator />
                </center>
                <p className="button1" >asjkdfhakshdfk</p>
            </div>
        );
    }
}

export default Body;