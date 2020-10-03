import React,{Component} from 'react';
import '.././css/NavigationBar.css';

class NavigationBar extends Component{
    render(){
        return(
            <div className="topnav">
                <a className="active" href="#home">Calculator</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        );
    }
}

export default NavigationBar;