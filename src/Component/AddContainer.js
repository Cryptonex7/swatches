import React from 'react';
import '../index.css';
import SwatchList from './SwatchList';

let item=0;
let regex=/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

function initItems(cb) {
    const data = { 
        color1: "#FF0000", 
        color2: "#0000FF" 
      }
    setTimeout(()=>cb(data), 2000)
}
const normalizeColor = (color) => {
  const tempSplit = color.split('');
  const copyColor = [];
  copyColor.push(tempSplit[0]);
  copyColor.push(tempSplit[1]);
  copyColor.push(tempSplit[1]);
  copyColor.push(tempSplit[2]);
  copyColor.push(tempSplit[2]);
  copyColor.push(tempSplit[3]);
  copyColor.push(tempSplit[3]);
  return copyColor;
}

const add = (color1, color2) => {

  if(color1.length === 4){
    color1 = normalizeColor(color1);
  }

  if(color2.length === 4){
    color2 = normalizeColor(color2);
  }
  let color3 = '#';
  let i=1;
  while(i<7){
    color3=color3.concat((Math.floor((parseInt(color1[i],16)+parseInt(color2[i],16))/2)).toString(16));
    i++;
  }

  return color3;
}
class AddContainer extends React.Component{

  constructor(){
    super();
    this.state={
      color1: '',
      color2: '',
      color3: ''
    }
  }

  callback = (data) =>{
    this.setState({
      color1: data.color1,
      color2: data.color2
    });
  }

  changeColor1 = (event)=> {
    if(regex.test(event.target.value)){
      this.setState({
        color1:event.target.value
      })
    }
    else{
      this.setState({
        color1:'',
      })
    }
  }

  changeColor2 = (event) => {
    if(regex.test(event.target.value)){
      this.setState({
        color2:event.target.value
      })
    }
    else{
      this.setState({
        color2:'',
      })
    }
  }

  setColor(){
    this.setState({
      color3:add(this.state.color1, this.state.color2)
    })
  }

  componentDidMount(){
    initItems(this.callback);
  }

  render(){
    if(!this.state.color1 && !this.state.color2){
      return(
             <div className='loading swatch'>Loading....</div>
      )
    }
    else{
      return(
          <div className='swatch'>
     
            <input className='reduce' type='text' placeholder='#FF0000' onChange={this.changeColor1}  />
            <span>+ </span>
            <input className='reduce' type='text' placeholder='#00FF000' onChange={this.changeColor2}  /> 
            <SwatchList color1={this.state.color1} color2={this.state.color2} add={add}/>
          </div>
      )
    }
  }
}
export default AddContainer;