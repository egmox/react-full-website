import React, {Component} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import NavigationBar from './components/NavigationBar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state =
      {
        title:'w7878'
      };
  }

  render() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Body />
    </div>
  );
  }
}

export default App;