import React, { Component } from 'react';
import './index.css';
import Container from './Component/Container';

function initItems(cb) {
    const data = [
        { color: "#FF0000", name: 1 },
        { color: "#00FF00", name: 2 },
        { color: "#0000FF", name: 3 }
    ];
    setTimeout(()=>cb(data), 2000)
}
let nextName = 4;
 
function newItem(color, cb) {
    const data = {
        color: color,
        name: nextName
    };
    nextName++
    setTimeout(()=>cb(data), 500);
}


class App extends Component {
  constructor(){
    super();
    this.state={
      swatches:[],
    }
  }
  componentDidMount(){
    initItems(this.callback);
  }
  callback = (data) =>{
    this.setState({
      swatches:[...data]
    })
 
  }
  newCallback = (data) =>{
    var newSwatch=[...this.state.swatches];
    newSwatch.push(data);
    /*this.setState({
      swatches:[...newSwatch]
    })*/
    this.callback(newSwatch);
    //console.log('newCallback',this.state.swatches);
  }
  render() {
    if(!this.state.swatches.length){
      return(
             <div>
              Loading...
             </div>
      )
    }
    else{
      return (
        <div className="App">
          <Container swatches={this.state.swatches} newItem={newItem} newCallback={this.newCallback}/>
          {/*console.log(this.state.swatches)*/}
        </div>
      );
    }
  }
}

export default App;